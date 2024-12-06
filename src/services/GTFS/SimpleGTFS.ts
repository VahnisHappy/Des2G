import GTFS from "@/services/GTFS/index.ts";
import {Agency} from "@/types/GTFS.ts";
import Zip from "@/services/Zip";
import {ADate, Calendar, Point, Route, Stop, Time, Trip} from "@/types";
import {transitTypes} from "@/data";

export default class SimpleGTFS implements GTFS {
    private agencies: Array<Agency> = [];
    private stops: Array<Stop> = [];
    private routes: Array<Route> = [];
    private calendar: Array<Calendar> = [];
    private trips: Array<Trip> = [];
    private zip: Zip;

    constructor(zip: Zip) {
        this.zip = zip;
    }

    setAgency(agency: Agency): GTFS {
        this.agencies = [agency];
        return this;
    }

    setStops(stops: Stop[]): GTFS {
        this.stops = stops;
        return this;
    }

    setRoutes(routes: Route[]): GTFS {
        this.routes = routes;
        return this;
    }

    setCalendar(calendar: Calendar[]): GTFS {
        this.calendar = calendar;
        return this;
    }

    setTrips(data: Trip[]): GTFS {
        this.trips = data;
        return this;
    }

    private _agencyText(): string {
        const head = ["agency_name", "agency_url", "agency_timezone"].join(",");
        const body = this.agencies.map(agency => [agency.name, agency.url, agency.timezone].join(",")).join("\n");
        return [head, body].join("\n");
    }

    private _stopText(): string {
        const head = ["stop_id", "stop_name", "stop_lat", "stop_lon"].join(",");
        const body = this.stops.map(stop => [stop.id.value, stop.name.value, stop.lat, stop.lng].join(",")).join("\n");
        return [head, body].join("\n");
    }

    private _routeText(): string {
        const head = ["route_id", "route_long_name", "route_type"].join(",");
        const body = this.routes.map(route => [route.id.value, route.name.value, transitTypes.indexOf(route.type.value!)].join(",")).join("\n");
        return [head, body].join("\n");
    }

    private _tripText(): string {
        const head = ["route_id", "service_id", "trip_id", "shape_id"].join(",");
        const body = this.trips.map(trip => [this.routes[trip.route.value!].id.value, this.calendar[trip.calendar.value!].id.value, trip.id.value, this.routes[trip.route.value!].id.value].join(",")).join("\n");
        return [head, body].join("\n");
    }

    private _formatTime(time: Time | null): string {
        if (!time) return "";
        const zeroPad = (num: number) => num.toString().padStart(2, "0");
        return [zeroPad(time.hour), zeroPad(time.minute), zeroPad(time.second)].join(":")
    }

    private _calculateDistanceFromCord(p_a: Point, p_b: Point): number {
        const earthRadiusKm = 6371;

        const dLat = this._degreesToRadians(p_b.lat - p_a.lat);
        const dLng = this._degreesToRadians(p_b.lng - p_a.lng);

        const originLat = this._degreesToRadians(p_a.lat);
        const destinationLat = this._degreesToRadians(p_b.lat);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(originLat) * Math.cos(destinationLat);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    }

    private _degreesToRadians(degrees: number): number {
        return degrees * Math.PI / 180;
    }

    private _stopTimeText(): string {
        const head = ["trip_id", "arrival_time", "departure_time", "stop_id", "stop_sequence"].join(",");
        const body = this.trips.map(trip => trip.stopTimes.map((stopTime, index) => [trip.id.value, this._formatTime(stopTime.arrivalTime?.value), this._formatTime(stopTime.departureTime?.value), this.stops[stopTime.stopIndex].id.value, index].join(",")).join("\n"));
        return [head, ...body].join("\n");
    }

    private _formatDate(date: ADate): string {
        const zeroPad = (num: number) => num.toString().padStart(2, "0");
        return [date.year, zeroPad(date.month), zeroPad(date.date)].join("");
    }

    private _formatDays(days: boolean[]): string[] {
        return days.map(day => day ? "1" : "0");
    }

    private _calendarText(): string {
        const head = ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"].join(",");
        const body = this.calendar.map(calendar => [calendar.id.value, ...this._formatDays(calendar.days), this._formatDate(calendar.startDate.value!), this._formatDate(calendar.endDate.value!)].join(",")).join("\n");
        return [head, body].join("\n");
    }

    private _shapeText(): string {
        const head = ["shape_id", "shape_pt_lat", "shape_pt_lon", "shape_pt_sequence", "shape_dist_traveled"].join(",");
        let body = '';
        let previousRouteId = '';

        this.routes.forEach(route => {
            const distances: number[] = [0];
            for (let index = 1; index < route.path.length; index++) {
                const distance = this._calculateDistanceFromCord(route.path[index], route.path[index - 1]);
                distances.push(distance + distances[index - 1]);
            }
            route.path.forEach((point, index) => {
                if (route.id.value !== previousRouteId) {
                    previousRouteId = route.id.value;
                }
                body += [route.id.value, point.lat, point.lng, index, distances[index]].join(",") + "\n";
            });
        });

        return [head, body.trim()].join("\n");
    }


    async export(): Promise<Blob> {
        await this.zip.clear();
        await this.zip.add({name: "agency.txt", content: this._agencyText()});
        await this.zip.add({name: "stops.txt", content: this._stopText()});
        await this.zip.add({name: "routes.txt", content: this._routeText()});
        await this.zip.add({name: "trips.txt", content: this._tripText()});
        await this.zip.add({name: "calendar.txt", content: this._calendarText()});
        await this.zip.add({name: "stop_times.txt", content: this._stopTimeText()});
        await this.zip.add({name: "shapes.txt", content: this._shapeText()});
        return await this.zip.export();
    }

}