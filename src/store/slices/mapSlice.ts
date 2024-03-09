import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MapState} from "@/store/states";
import {ViewState} from "react-map-gl";
import {Bounds} from "@/types";

const initialState: MapState = {
    accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
    mapStyle: "mapbox://styles/mapbox/light-v11",
    location: {value: "", error: false},
}
const appSlice = createSlice({
    name: "mapState",
    initialState,
    reducers: {
        setViewState: (state, {payload}: PayloadAction<ViewState>) => {
            state.viewState = payload;
        },
        setBounds: (state, {payload}: PayloadAction<Bounds | null>) => {
            if (!payload)
                state.location.error = true;
            else
                state.bounds = payload;
        },
        setLocation: (state, {payload}: PayloadAction<string>) => {
            state.location = {value: payload, error: state.location.error && payload === state.location.value};
        }
    }
});

export default appSlice;