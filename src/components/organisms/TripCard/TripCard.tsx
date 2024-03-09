import {CalendarIndex, RouteIndex, Trip} from "@/types";
import Card from "@/components/atoms/Card";
import {Stack} from "@mui/material";
import style from './tripCard.module.css'
import {RootState} from "@/store";
import {useSelector} from "react-redux";
import TextInput from "@/components/atoms/TextInput";
import SelectInput from "@/components/atoms/SelectInput";
import ButtonInput from "@/components/atoms/ButtonInput";

type TripCardProps = {
    trip: Trip,
    onChange?: (trip: Trip) => void,
    onDelete?: () => void,
}

export default function TripCard({trip, onDelete, onChange}: TripCardProps) {
    const routes = useSelector((state: RootState) => state.routeState.data);
    const calendars = useSelector((state: RootState) => state.calendarState.data);
    const routes_map = new Map(routes.map((route, index) => [index, route.id.value || "<no id>"]));
    const calendars_map = new Map(calendars.map((calendar, index) => [index, calendar.id.value || "<no id>"]));
    const handleRouteIDChange = (v: string) => {
        const value = parseInt(v) as RouteIndex;
        onChange?.({...trip, route: {value}});
    }
    const handleServiceIDChange = (v: string) => {
        const value = parseInt(v) as CalendarIndex;
        onChange?.({...trip, calendar: {value}});
    }
    const handleIDChange = (value: string) => onChange?.({...trip, id: {value}});
    return <Card>
        <Stack direction="row" spacing={1} className={style.header}>
            <h2>trip</h2>
            <ButtonInput label="delete" style={{backgroundColor: "red"}} onClick={onDelete}/>
        </Stack>
        <p>route id</p>
        <SelectInput map={routes_map} field={trip.route} onChange={handleRouteIDChange}/>
        <p>service id</p>
        <SelectInput map={calendars_map} field={trip.calendar} onChange={handleServiceIDChange}/>
        <TextInput label="id" field={trip.id} onChange={handleIDChange}/>
    </Card>;
}