import {Source, Layer} from "react-map-gl";
import {DefaultProps} from "types/DefaultProps.ts";
export type MapClickEvent = {
    lat: number,
    lng: number,
}
export type MapProps = DefaultProps & {
    mapStyle?: string,
    children?: ReturnType<typeof Source | typeof Layer>,
    onClick?: (event: MapClickEvent) => void,
}