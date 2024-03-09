import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CalendarState} from "@/store/states";
import {Calendar, CalendarIndex} from "@/types";

const initialState: CalendarState = {
    data: []
}
const calendarSlice = createSlice({
    name: "calendarState",
    initialState,
    reducers: {
        addCalendar: (state, {payload}: PayloadAction<Calendar>) => {
            state.data.push(payload)
        },
        removeCalendar: (state, {payload}: PayloadAction<CalendarIndex>) => {
            state.data = state.data.filter((_, index) => index !== payload)
        },
        setCalendar: (state, {payload}: PayloadAction<Calendar[]>) =>{
            state.data = payload
        }
    }
});

export default calendarSlice;