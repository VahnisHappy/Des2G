import {configureStore} from "@reduxjs/toolkit";
import appSlice from "@/store/slices/appSlice.ts";
import mapSlice from "@/store/slices/mapSlice.ts";
import agencySlice from "@/store/slices/agencySlice.ts";
import calendarSlice from "@/store/slices/calendarSlice.ts";
import routeSlice from "@/store/slices/routeSlice.ts";
import stopSlice from "@/store/slices/stopSlice.ts";
import tripSlice from "@/store/slices/tripSlice.ts";

const store = configureStore({
    reducer: {
        appState: appSlice.reducer,
        mapState: mapSlice.reducer,
        agencyState: agencySlice.reducer,
        calendarState: calendarSlice.reducer,
        stopState: stopSlice.reducer,
        routeState: routeSlice.reducer,
        tripState: tripSlice.reducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
