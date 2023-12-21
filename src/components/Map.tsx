import "../styles/Map.css"
import {useEffect, useState} from "react";
import mapboxgl, {IControl, LngLatLike, Map} from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import 'mapbox-gl/dist/mapbox-gl.css';
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"

export const MapDisplay = ({controls, center}: { controls: IControl[], center?: LngLatLike }) => {
    const [map, setMap] = useState<Map | null>(null);
    useEffect(() => {
        const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || ''
        setMap(new Map({
            accessToken,
            container: "map",
            style: "mapbox://styles/mapbox/light-v11", // style URL
            center: [98.9558223, 18.8025133], // starting position [lng, lat]
            zoom: 1.5, // starting zoom
        }));
        for (const control of controls) map?.addControl(control);
    }, []);
    useEffect(() => {
        if (!map || !center) return;
        map.panTo(center);
    }, [center, map]);
    return (
        <div className="map-component">
            <div id="map"></div>
        </div>
    )
}