import StopMarker from "@/components/atoms/MapMarker";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

export type StopDisplayProps = {
    onClick?: (index: number) => void
}
export default function StopDisplay({onClick}: StopDisplayProps) {
    const stops = useSelector((state: RootState) => state.stopState.data);
    return <>
        {stops.map((stop, index) => <StopMarker key={index} stop={stop} onClick={() => onClick?.(index)}/>)}
    </>
}