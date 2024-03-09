import style from './stopTimeElement.module.css';
import {StopTime, Time} from '@/types';
import Card from "@/components/atoms/Card";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {Stack} from "@mui/material";
import TimeInput from "@/components/atoms/TimeInput";

type StopTimeElementProps = {
    stopTime: StopTime,
    onChange?: (stopTime: StopTime) => void,
    onDelete?: () => void,
};

export default function StopTimeElement({stopTime, onChange}: StopTimeElementProps) {
    const stops = useSelector((state: RootState) => state.stopState.data);
    const stop = stops[stopTime.stopIndex];
    const handleArrivalTimeChange = (value: Time) => onChange?.({...stopTime, arrivalTime: {value}});
    const handleDepartureTimeChange = (value: Time) => onChange?.({...stopTime, departureTime: {value}})
    return (
        <Card>
            <div>{stop.name.value || "<untitled>"}</div>
            <Stack direction="column" spacing={1} className={style.header}>
                <TimeInput label="arrival time" field={stopTime.arrivalTime} onChange={handleArrivalTimeChange}/>
                <TimeInput label="departure time" field={stopTime.departureTime} onChange={handleDepartureTimeChange}/>
            </Stack>
        </Card>
    );
}
