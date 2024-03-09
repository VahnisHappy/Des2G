import TripCard from "@/components/organisms/TripCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {Stack} from "@mui/material";
import ButtonInput from "@/components/atoms/ButtonInput/ButtonInput.tsx";
import {TripActions} from "@/store/actions";
import {createTrip} from "@/factory";
import {Trip} from "@/types";

export default function TripControlPanel() {
    const dispatch = useDispatch();
    const trips = useSelector((state: RootState) => state.tripState.data);
    const handleChange = (index: number) => (trip: Trip) => {
        const c_trips = [...trips];
        c_trips[index] = trip;
        errorHighlight(c_trips);
        dispatch(TripActions.setTrips(c_trips))
    }
    const handleDelete = (index: number) => () => dispatch(TripActions.removeTrip(index));
    const errorHighlight = (c_trips: Trip[]) => {
        // Handle all duplicated ID
        const map = new Map<string, number>();
        c_trips.forEach(t => {
            const count = map.get(t.id.value) || 0;
            map.set(t.id.value, count + 1);
        });
        // Highlight all duplicated or empty ID field
        c_trips.forEach((t, i) => {
            const count = map.get(t.id.value) || 0;
            const c_t = {...t};
            c_t.id = {...c_t.id, error: count > 1 || c_t.id.value.length < 1};
            c_t.route = {...c_t.route, error: c_t.route.value === null};
            c_t.calendar = {...c_t.calendar, error: c_t.calendar.value === null};
            c_trips[i] = c_t;
        });
    }
    return <>
        {trips.length ? <Stack direction="column">{trips.map((trip, index) =>
            <TripCard key={index} trip={trip} onChange={handleChange(index)} onDelete={handleDelete(index)} />)}
        </Stack> : <div style={{textAlign: "center"}}>
            <div>--- no trips ---</div>
            <div style={{fontSize: '10px'}}>you can create new one!</div>
        </div>}
        <ButtonInput label="add" onClick={() => dispatch(TripActions.addTrip(createTrip()))} />
    </>
}