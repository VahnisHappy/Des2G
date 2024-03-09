import ButtonInput from "@/components/atoms/ButtonInput/index.ts";
import {createGTFS, saveAs} from "@/services/GTFS";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {AppActions} from "@/store/actions";
import {ControlPanel, Field} from "@/types";

export default function PreviewButton() {
    const dispatch = useDispatch();
    const agency = useSelector((state: RootState) => state.agencyState);
    const stops = useSelector((state: RootState) => state.stopState);
    const routes = useSelector((state: RootState) => state.routeState);
    const calendar = useSelector((state: RootState) => state.calendarState);
    const trips = useSelector((state: RootState) => state.tripState);
    async function validateState<T>(state: { [key: string]: any }, to: ControlPanel) {
        for (const k of Object.keys(state)) {
            if (state[k].error === undefined && state[k] instanceof Object) {
                if (!await validateState(state[k] as { [key: string]: Partial<Field<T>> }, to))
                    return false;
            } else if (state[k].error != undefined) {
                const error = (state[k] as Field<T>).error;
                if (error) {
                    dispatch(AppActions.setControlPanel(to));
                    return false;
                }
            }
        }
        return true;
    }

    async function handlePreview() {
        if (!await validateState(agency, "agency")) return;
        if (!await validateState(stops, "stops")) return;
        if (!await validateState(routes, "routes")) return;
        if (!await validateState(calendar, "calendar")) return;
        if (!await validateState(trips, "trips")) return;
        const gtfs = createGTFS();
        gtfs.setAgency({
            name: agency.name.value,
            url: agency.url.value,
            timezone: agency.timezone.value
        });
        gtfs.setStops(stops.data);
        gtfs.setRoutes(routes.data);
        gtfs.setCalendar(calendar.data);
        gtfs.setTrips(trips.data);
        const blob = await gtfs.export();
        saveAs("gtfs.zip", blob)
    }

    return <ButtonInput label="download" onClick={handlePreview} />;
}