import {Stop} from "@/types";
import {Marker} from "react-map-gl";
import style from './stopMarker.module.css';

export type StopMarkerProps = {
    stop: Stop,
    onClick?: (stop: Stop) => void
}
export default function StopMarker({stop, onClick}: StopMarkerProps) {
    return <Marker longitude={stop.lng} latitude={stop.lat} onClick={() => onClick?.(stop)}>
        <div className={style.dot} style={{backgroundColor: stop.focus ? "#4CAF50" : ""}}></div>
    </Marker>
}