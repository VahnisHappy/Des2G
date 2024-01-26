import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHand} from "@fortawesome/free-regular-svg-icons";
import {faMapPin, faBezierCurve} from "@fortawesome/free-solid-svg-icons";
import './MapControl.modoule.css'
import {useDispatch} from "react-redux";
import {setMode} from "@/store/states/map.ts";

export function MapControl(){
    const dispatch = useDispatch();
    return <div className="mapControl">
             <FontAwesomeIcon icon={faHand} onClick={() => dispatch(setMode('drag'))} />
             <span className="pipe"></span>
             <FontAwesomeIcon icon={faMapPin} onClick={() => dispatch(setMode('point'))} />
             <span className="pipe"></span>
             <FontAwesomeIcon icon={faBezierCurve} onClick={() => dispatch(setMode('route'))} />
         </div>;
}