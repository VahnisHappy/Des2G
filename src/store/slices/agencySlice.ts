import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AgencyState} from "@/store/states";
import {createField} from "@/factory";

const initialState: AgencyState = {
    name: createField(""),
    url: createField(""),
    timezone: createField(""),
}
const appSlice = createSlice({
    name: "agencyState",
    initialState,
    reducers: {
        setName: (state, {payload}: PayloadAction<string>) => {
            state.name = {value: payload, error: payload.length <= 0};
        },
        setURL: (state, {payload}: PayloadAction<string>) => {
            state.url = {value: payload, error: payload.length <= 0};
        },
        setTimezone: (state, {payload}: PayloadAction<string>) => {
            state.timezone = {value: payload, error: payload.length <= 0};
        }
    }
});

export default appSlice;