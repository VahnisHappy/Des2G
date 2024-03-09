import appSlice from "@/store/slices/appSlice.ts";
import mapSlice from "@/store/slices/mapSlice.ts";
import agencySlice from "@/store/slices/agencySlice.ts";
import calendarSlice from "@/store/slices/calendarSlice.ts";
import stopSlice from "@/store/slices/stopSlice.ts";
import routeSlice from "@/store/slices/routeSlice.ts";
import tripSlice from "@/store/slices/tripSlice.ts";

export const AppActions = appSlice.actions;
export const MapActions = mapSlice.actions;
export const AgencyActions = agencySlice.actions;
export const CalendarActions = calendarSlice.actions;
export const RouteActions = routeSlice.actions;
export const StopActions = stopSlice.actions;
export const TripActions = tripSlice.actions;