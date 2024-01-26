import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ADate} from "types/Date.ts";

export type LocationControlState = {
    location: string
}

export type AgencyControlState = {
    name: string,
    url: string,
    id: string,
    timezone: string,
}

export type CalendarControlState = {
    service_name: string,
    start_date: ADate | null,
    end_date: ADate | null,
}

export type TripControlState = {

}

export type ControlPanelState = {
    location: LocationControlState,
    agency: AgencyControlState,
    calendar: CalendarControlState,
    trip: TripControlState,
}

const initialState: ControlPanelState = {
    location: {
        location: ''
    },
    agency: {
        name: '',
        url: '',
        id: '',
        timezone: '',
    },
    calendar: {
        service_name: '',
        start_date: null,
        end_date: null,
    },
    trip: {},
}

export const controlPanelSlice = createSlice({
    name: 'controlPanelState',
    initialState,
    reducers: {
        setLocation(state, action: PayloadAction<string>) {
            state.location.location = action.payload;
        },
        setName(state, action: PayloadAction<string>) {
            state.agency.name = action.payload;
        },
        setURL(state, action: PayloadAction<string>) {
            state.agency.url = action.payload;
        },
        setID(state, action: PayloadAction<string>) {
            state.agency.id = action.payload;
        },
        setTimezone(state, action: PayloadAction<string>) {
            state.agency.timezone = action.payload;
        },
        setServiceName(state, action: PayloadAction<string>) {
            state.calendar.service_name = action.payload;
        },
        setStartDate(state, action: PayloadAction<any | null>) {
            state.calendar.start_date = action.payload;
        },
        setEndDate(state, action: PayloadAction<any | null>){
            state.calendar.end_date = action.payload;
        }
    }
})

export const {setLocation, setName, setURL} = controlPanelSlice.actions;
export const {setID, setTimezone} = controlPanelSlice.actions;
export const {setServiceName, setStartDate, setEndDate} = controlPanelSlice.actions;
export default controlPanelSlice.reducer;