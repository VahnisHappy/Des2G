import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StopState} from "@/store/states";
import {Stop, StopIndex} from "@/types";

const initialState: StopState = {
    data: []
}
const stopSlice = createSlice({
    name: "stopState",
    initialState,
    reducers: {
        addStop: (state, {payload}: PayloadAction<Stop>) => {
            state.data = [...state.data, payload];
        },
        removeStop: (state, {payload}: PayloadAction<StopIndex>) => {
            state.data = state.data.filter((_, i) => i !== payload);
        },
        focusStop: (state, {payload}: PayloadAction<StopIndex>) => {
            state.data = state.data.map((s, i) => ({...s, focus: i === payload}));
        },
        unfocusedStop: (state) => {
            state.data = state.data.map(s => ({...s, focus: false}));
        },
        setStops: (state, {payload}: PayloadAction<Stop[]>) => {
            state.data = payload;
        }
    }
});

export default stopSlice;