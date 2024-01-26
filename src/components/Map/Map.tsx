import {
    CircleLayer,
    Layer,
    LineLayer,
    Map as Mapbox,
    MapLayerMouseEvent,
    Source,
    ViewStateChangeEvent
} from "react-map-gl";
import {MapProps} from "components/Map/Props.ts";
import {useDispatch, useSelector} from "react-redux";
import type {MapRef} from "react-map-gl";
import React from "react";
import {RootState} from "@/store";
import style from './Map.module.css'
import {newPosition, setLines, setViewState} from "@/store/states/map.ts";
import {FeatureCollection} from "geojson";
import Directions from "@mapbox/mapbox-sdk/services/directions";

export function Map(props: MapProps) {
    const dispatch = useDispatch();
    const {bounds, view_state, stops, lines} = useSelector((state: RootState) => state.mapState);
    const mapRef = React.useRef<MapRef | null>(null);

    React.useEffect(() => {
        const map = mapRef.current;
        if (!map || bounds.length !== 4) return;
        const [w, x, y, z] = bounds;
        map.fitBounds([w, x, y, z])
    }, [mapRef, bounds]);

    const handleClick = (e: MapLayerMouseEvent) => dispatch(newPosition([e.lngLat.lng, e.lngLat.lat]))

    const handleMove = (e: ViewStateChangeEvent) => dispatch(setViewState(e.viewState))
    const stopFeatures: FeatureCollection = {
        type: 'FeatureCollection',
        features: [
            {type: 'Feature', geometry: {type: 'MultiPoint', coordinates: stops}, properties: null}
        ]
    };
    const stopLayerStyle: CircleLayer = {
        id: 'point',
        type: 'circle',
        paint: {
            'circle-radius': 4,
            'circle-color': 'red'
        }
    };
    // const lineFeatures: FeatureCollection = {
    //     type: 'FeatureCollection',
    //     features:[
    //         {type: 'Feature', geometry: {type: 'LineString', coordinates: lines}, properties: null}
    //         // {type: 'Feature', geometry: {type: 'MultiLineString', coordinates: lines}, properties: null}
    //     ]
    // }
    const lineFeatures: FeatureCollection = {
        type: 'FeatureCollection',
        features: lines.map(line => ({
            type: 'Feature', geometry: {type: 'LineString', coordinates: line}, properties: null
        }))
    }
    const lineLayerStyle: LineLayer = {
        id: 'line',
        type: 'line',
        paint: {
            'line-color': '#888',
            'line-width': 5
        }
    }
    const directions = Directions({accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || ''})
    React.useEffect(() => {
        if (stops.length < 2) return;
        directions.getDirections({
            profile: 'driving',
            waypoints: stops.map((lngLat) => ({coordinates: lngLat})),
            steps: true
        }).send().then(response => {
            const positions = response.body.routes[0].legs[0].steps.map(step => step.maneuver.location);
            dispatch(setLines(positions))
        });
    }, [stops]);
    return <div className={`${style.container} ${props.className}`} style={props.style}>
        <Mapbox ref={mapRef} mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                mapStyle={props.mapStyle || "mapbox://styles/mapbox/light-v11"}
            // onClick={event => alert(`${event.lngLat.lat}, ${event.lngLat.lng}`)}
                onClick={handleClick}
                onMove={handleMove}
                {...view_state}
                id={style.map}>
            <Source type="geojson" data={stopFeatures}>
                <Layer {...stopLayerStyle}/>
            </Source>
            <Source type="geojson" data={lineFeatures}>
                <Layer {...lineLayerStyle}/>
            </Source>
            {props.children}
        </Mapbox>
    </div>

}

