import {Agency} from "@/types/GTFS.ts";
import SimpleGTFS from "@/services/GTFS/SimpleGTFS.ts";
import JSZipAdapter from "@/services/Zip/JSZipAdapter.ts";
import {Calendar, Route, Stop, Trip} from "@/types";

export function createGTFS() {
    const zip = new JSZipAdapter();
    return new SimpleGTFS(zip);
}

export function saveAs(name: string, content: Blob) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = name;
    a.click();
}

export default interface GTFS {
    setAgency(data: Agency): GTFS;
    setStops(data: Stop[]): GTFS;
    setRoutes(data: Route[]): GTFS;
    setCalendar(data: Calendar[]): GTFS;
    setTrips(data: Trip[]): GTFS;
    export(): Promise<Blob>;
}