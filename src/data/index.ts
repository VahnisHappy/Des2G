import {Mode} from "@/types";
import {faHand, faMapPin, faRoute} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export const controlPanels = ['location', 'agency', 'stops', 'routes', 'calendar', 'trips'];
export const modes = ['drag', 'pin', 'draw'];
export const transitTypes = ["tram", "subway, metro", "rail", "bus", "ferry", "cable tram", "aerial lift", "funicular", "trolleybus", "monorail"];
export const menuIcons: { [key: Mode]: IconDefinition } = {
    drag: faHand,
    pin: faMapPin,
    draw: faRoute,
}