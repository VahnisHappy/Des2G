import {StopTime} from "@/types";
import StopTimeElement from "@/components/molecules/StopTimeElement";

export type StopTimesListProps = {
    label: string,
    stopTimes: StopTime[],
    onChange?: (stopTimes: StopTime[]) => void,
}
export default function StopTimesList ({label, stopTimes, onChange}: StopTimesListProps){
    const handleChange = (index: number) => (v: StopTime) => onChange?.(stopTimes.map((s, i) => i === index ? v : s));
    return <>
        <div>{label}</div>
        { stopTimes.map((stopTime, index) => <StopTimeElement key={index} stopTime={stopTime} onChange={handleChange(index)}/>) }
    </>
}