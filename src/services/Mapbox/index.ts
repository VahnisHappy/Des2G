import Geocoding from "@mapbox/mapbox-sdk/services/geocoding";
import {Bounds, Point} from "@/types";
import Directions from "@mapbox/mapbox-sdk/services/directions";
import {LineString} from "geojson";

const geocoding = Geocoding({accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || ''})
const directions = Directions({accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || ''})

export async function search(query: string): Promise<Bounds | null> {
    const response = await geocoding.forwardGeocode({
        query,
        limit: 1
    }).send();
    if (!response.body.features.length) return null;
    const feature = response.body.features[0];
    if (!feature.bbox) return null;
    return feature.bbox as Bounds;
}

export async function direction(routes: Point[]): Promise<Point[]> {
    const response = await directions.getDirections({
        profile: 'driving',
        waypoints: routes.map((point) => ({coordinates: [point.lng, point.lat]})),
        geometries: 'geojson',
        overview: 'full',
        steps: true
    }).send();
    if (response.body.routes.length === 0) return [];
    const route = response.body.routes;
    const path = route.map(route => (route.geometry as LineString).coordinates);
    if (path.length === 0) return [];
    return path[0].map(coordinates => ({lng: coordinates[0], lat: coordinates[1]}));
}
