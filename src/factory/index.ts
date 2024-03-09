import {Calendar, Field, Point, Route, Stop, StopTime, Trip} from "@/types";


export function createStop(point: Point): Stop {
    return {
        ...point,
        id: createField(""),
        name: createField("")
    }
}

export function createField<T>(value: T, optional?: boolean): Field<T> {
    return {value, error: !optional}
}

export function createRoute(color: string): Route {
    return {
        id: createField(""),
        name: createField(""),
        stopTimes: [],
        path: [],
        color,
        edit: false,
        type: createField("")
    }
}

export function createStopTime(stopIndex: number): StopTime {
    return {
        stopIndex,
        arrivalTime: createField(null),
        departureTime: createField(null)
    }
}

export function createTrip(): Trip {
    return {
        id: createField(""),
        route: createField(null),
        calendar: createField(null)
    }
}

export function createCalendar(): Calendar {
    return {
        id: createField(""),
        startDate: createField(null),
        endDate: createField(null),
        days: [false, false, false, false, false, false, false],
        // operationDate: createField(null),
        // expectationDate: null,
    }
}