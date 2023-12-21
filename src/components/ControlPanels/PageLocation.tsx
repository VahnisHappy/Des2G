import {GeocoderSearch} from "../GeocoderSearch";

export default function() {
    return (
        <div className="inputContainer">
            <div  className="text" >location</div>
            <div>
               <GeocoderSearch/>
            </div>
        </div>
    );
}