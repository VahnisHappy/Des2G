import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "@/store/states";
import {Mode} from "@/types";

const initialState: AppState = {
    controlPanel: "location",
    mode: "drag",
    edited: false
}
const appSlice = createSlice({
    name: "appState",
    initialState,
    reducers: {
        setControlPanel: (state, {payload}: PayloadAction<string>) => {
            state.controlPanel = payload;
        },
        setMode: (state, {payload}: PayloadAction<Mode>) => {
            state.mode = payload;
        },
        setEdited: (state, {payload}: PayloadAction<boolean>) => {
            state.edited = payload;
        }
    }
});

export default appSlice;