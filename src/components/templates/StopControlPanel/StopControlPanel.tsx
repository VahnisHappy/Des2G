import {RootState} from "@/store";
import {useDispatch, useSelector} from "react-redux";
import {Stack} from "@mui/material";
import StopCard from "@/components/molecules/StopCard";
import {RouteActions, StopActions} from "@/store/actions";
import {Stop} from "@/types";

export default function StopControlPanel() {
    const stops = useSelector((state: RootState) => state.stopState.data);
    const dispatch = useDispatch();
    const handleChange = (index: number) => (stop: Stop) => {
        const c_stops = [...stops];
        c_stops[index] = stop;
        errorHighlight(c_stops);
        dispatch(StopActions.setStops(c_stops));
    }
    const handleDelete = (index: number) => () => {
        dispatch(StopActions.removeStop(index));
        dispatch(RouteActions.removeStopByStopIndex(index));
    }
    const errorHighlight = (c_stops: Stop[]) => {
        // Handle all duplicated ID
        const map = new Map<string, number>();
        c_stops.forEach(s => {
            const count = map.get(s.id.value) || 0;
            map.set(s.id.value, count + 1);
        });
        // Highlight all duplicated or empty ID field
        c_stops.forEach((s, i) => {
            const count = map.get(s.id.value) || 0;
            const c_s = {...s};
            c_s.id = {...c_s.id, error: count > 1 || c_s.id.value.length < 1};
            c_s.name = {...c_s.name, error: c_s.name.value.length < 1};
            c_stops[i] = c_s;
        });
    }
    return stops.length ? <Stack direction="column">
        {stops.map((stop, index) => <StopCard key={index} stop={stop} onChange={handleChange(index)}
                                              onFocus={() => dispatch(StopActions.focusStop(index))}
                                              onUnfocused={() => dispatch(StopActions.unfocusedStop())}
                                              onDelete={handleDelete(index)}/>)}
    </Stack> : <div style={{textAlign: "center"}}>
        <div>--- no stops ---</div>
        <div style={{fontSize: '10px'}}>you can switch to pin mode and create new one!</div>
    </div>
}