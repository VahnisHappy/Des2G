import MapDisplay from "@/components/organisms/MapDisplay";
import MapControl from "@/components/organisms/MapControl";
import {MapLayerMouseEvent} from "react-map-gl";
import {Point, StopIndex} from "@/types";
import {RootState} from "@/store";
import {useDispatch, useSelector} from "react-redux";
import {RouteActions, StopActions} from "@/store/actions";
import {createStop} from "@/factory";
import StopDisplay from "@/components/organisms/StopDisplay";
import React from "react";
import {direction} from "@/services/Mapbox";
import PathDisplay from "@/components/organisms/PathDisplay";

export default function Map() {
    const dispatch = useDispatch();
    const {mode} = useSelector((state: RootState) => state.appState);
    const stops = useSelector((state: RootState) => state.stopState.data);
    const routes = useSelector((state: RootState) => state.routeState.data);
    const handlePin = (point: Point) => dispatch(StopActions.addStop(createStop(point)));
    const handleDraw = (stop: StopIndex) => dispatch(RouteActions.addStop(stop));

    const currentEditedRoute = routes.find(route => route.edit);
    React.useEffect(() => {
        if (!currentEditedRoute) return;
        const points: Point[] = currentEditedRoute.stopIndexes.map(idx => stops[idx]);
        if (points.length < 2) dispatch(RouteActions.setPath([]));
        else direction(points).then(path => dispatch(RouteActions.setPath(path)))
    }, [currentEditedRoute?.stopIndexes, stops])

    const handleMapDisplayClick = (e: MapLayerMouseEvent) => {
        const target = e.originalEvent.target as HTMLElement;
        if (target !== e.target.getCanvas()) return;
        const point = e.lngLat as Point;
        if (mode === "pin") handlePin(point);
    }

    const handleStopDisplayClick = (index: number) => {
        if (mode === "pin") dispatch(StopActions.focusStop(index));
        else if (mode === "draw") handleDraw(index);
    }

    return<MapDisplay onClick={handleMapDisplayClick}>
        <MapControl position="top-right"/>
        <StopDisplay onClick={handleStopDisplayClick}/>
        <PathDisplay lineWidth={3} />
    </MapDisplay>

}

