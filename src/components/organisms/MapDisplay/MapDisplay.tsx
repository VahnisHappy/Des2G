import {Map as Mapbox, MapLayerMouseEvent, MapRef, ViewState, ViewStateChangeEvent} from "react-map-gl";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import style from './mapDisplay.module.css'
import React from "react";
import {DefaultProps, MapData} from "@/types";
import {MapActions} from "@/store/actions";

export type MapDisplayProps = DefaultProps & {
    onClick?: (event: MapLayerMouseEvent) => void,
    data?: MapData,
    viewState?: ViewState,
    children: React.ReactNode,
}
export default function MapDisplay(props: MapDisplayProps) {
    const dispatch = useDispatch();
    const {accessToken, mapStyle, viewState, bounds} = useSelector((state: RootState) => state.mapState);
    const handleClick = (e: MapLayerMouseEvent) => props.onClick?.(e)
    const handleMove = (e: ViewStateChangeEvent) => dispatch(MapActions.setViewState(e.viewState));
    const mapRef = React.useRef<MapRef | null>(null);
    React.useEffect(() => {
        const map = mapRef.current;
        if (!map || !bounds) return;
        map.fitBounds(bounds)
    }, [mapRef, bounds]);
    return <div className={`${style.container} ${props.className}`} style={props.style}>
        <Mapbox mapboxAccessToken={accessToken}
                ref={mapRef}
                mapStyle={mapStyle}
                onClick={handleClick}
                onMove={handleMove}
                {...viewState}
                id={style.map}>
            {props.children}
        </Mapbox>
    </div>

}

