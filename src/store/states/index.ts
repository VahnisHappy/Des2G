import {Bounds, Calendar, ControlPanel, Field, Mode, Route, Stop, Trip} from "@/types";
import {ViewState} from "react-map-gl";

export type AgencyState = {
    name: Field<string>,
    url: Field<string>,
    timezone: Field<string>,
}
export type LocationState = {
    location: Field<string>
}
export type CalendarState = {
    data: Calendar[],
}
export type TripState = {
    data: Trip[],
}
export type StopState = {
    data: Stop[],
}
export type RouteState = {
    data: Route[],
}
export type MapState = {
    accessToken: string,
    mapStyle: string,
    location: Field<string>,
    viewState?: Partial<ViewState>,
    bounds?: Bounds,
}
export type AppState = {
    controlPanel: ControlPanel,
    mode: Mode,
    edited: boolean
}