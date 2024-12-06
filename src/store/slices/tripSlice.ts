import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TripState} from "@/store/states";
import {Trip, TripIndex} from "@/types";

const initialState: TripState = {
    data: []
}
const tripSlice = createSlice({
    name: "tripState",
    initialState,
    reducers: {
        addTrip: (state, {payload}: PayloadAction<Trip>) => {
            state.data.push(payload);
        },
        removeTrip: (state, {payload}: PayloadAction<TripIndex>) => {
            state.data = state.data.filter((_, index) => index !== payload);
        },
        setTrips: (state, {payload}: PayloadAction<Trip[]>) => {
            state.data = payload;
        },
    }
});

export default tripSlice;