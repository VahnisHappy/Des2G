import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RouteState} from "@/store/states";
import {Point, Route, RouteIndex, StopIndex, StopTime} from "@/types";
import {createStopTime} from "@/factory";

const initialState: RouteState = {
    data: [],
}
const routeSlice = createSlice({
    name: "routeState",
    initialState,
    reducers: {
        addRoute: (state, {payload}: PayloadAction<Route>) => {
            state.data = [...state.data, payload];
        },
        removeRoute: (state, {payload}: PayloadAction<RouteIndex>) => {
            state.data = state.data.filter((_, i) => i !== payload);
        },
        addStop: (state, {payload}: PayloadAction<StopIndex>) => {
            const route = state.data.find(r => r.edit);
            if (!route) return;
            route.stopTimes = [...route.stopTimes, createStopTime(payload)];
        },
        removeStopByRouteIndex: (state, {payload}: PayloadAction<number>) => {
            const route = state.data.find(r => r.edit);
            if (!route) return;
            route.stopTimes = route.stopTimes.filter((_, i) => i !== payload);
        },
        removeStopByStopIndex: (state, {payload}: PayloadAction<StopIndex>) => {
            state.data.forEach(r => {
                if (r.stopTimes.some(s => s.stopIndex !== payload)) r.path = [];
                r.stopTimes = r.stopTimes.filter(s => s.stopIndex !== payload)
            })
        },
        setRouteColor: (state, {payload}: PayloadAction<{ index: number, color: string }>) => {
            state.data = state.data.map((r, idx) => {
                if (idx === payload.index)
                    r.color = payload.color;
                return r;
            })
        },
        setStopTime: (state, {payload}: PayloadAction<{ index: number, stopTime: StopTime }>) => {
            const route = state.data.find(r => r.edit);
            if (!route) return;
            route.stopTimes = route.stopTimes.map((st, i) => i === payload.index ? payload.stopTime : st);
        },
        setPath: (state, {payload}: PayloadAction<Point[]>) => {
            const route = state.data.find(r => r.edit);
            if (!route) return;
            route.path = payload;
        },
        editRoute: (state, {payload}: PayloadAction<RouteIndex>) => {
            state.data = state.data.map((r, i) => ({...r, edit: i === payload}));
        },
        exitEditRoute: (state) => {
            state.data = state.data.map(r => ({...r, edit: false}));
        },
        setRoutes: (state, {payload}: PayloadAction<Route[]>) => {
            state.data = payload;
        }
    }
});

export default routeSlice;