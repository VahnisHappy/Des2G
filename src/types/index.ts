import {CSSProperties} from "react";
import {modes, controlPanels} from "@/data";
import {Field} from "@/types/Field.ts";

export type DefaultProps = {
    className?: string,
    style?: CSSProperties,
}
export type ADate = {
    date: number,
    month: number,
    year: number,
}
export type ControlPanel = typeof controlPanels[number];
export type Time = {
    hour: number,
    minute: number,
    second: number
}
export type Point = {
    lat: number,
    lng: number,
};
export type RouteIndex = number;
export type StopIndex = number;
export type CalendarIndex = number;
export type TripIndex = number;
export type StopTime = {
    arrivalTime: Field<Time | null>,
    departureTime: Field<Time | null>,
    stopIndex: number
}
export type Route = {
    id: Field<string>,
    name: Field<string>,
    path: Point[],
    stopIndexes: StopIndex[],
    color: string,
    edit: boolean,
    type: Field<string>
}
export type MapData = {
    routes: Route[],
}
export type Mode = typeof modes[number];
export type FocusablePoint = Point & {
    focus?: boolean,
}
export type Stop = FocusablePoint & {
    id: Field<string>,
    name: Field<string>
}

export type Trip = {
    id: Field<string>,
    route: Field<RouteIndex | null>,
    calendar: Field<CalendarIndex | null>,
    stopTimes: StopTime[],
}
export type BooleanDays = [boolean, boolean, boolean, boolean, boolean, boolean, boolean]; // Start with Monday
export type Calendar = {
    id: Field<string>,
    startDate: Field<ADate | null>,
    endDate: Field<ADate | null>,
    days: BooleanDays,
    // operationDate: Field<ADate | null>,
    // expectationDate: boolean | null,
}
export type Bounds = [number, number, number, number];
export type {Field} from "@/types/Field.ts";