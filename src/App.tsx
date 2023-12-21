import React, {useEffect, useRef, useState} from "react";
import "./App.css";
import {Menubar} from "./components/Menubar";
import {ControlPanel} from "./components/ControlPanel";
import {MapDisplay} from "./components/Map";
import {PageNumbers} from "./components/PageNumbers";
import mapboxgl, {IControl, LngLatBounds, LngLatLike} from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

function App() {
    const [state, setState] = useState<PageNumbers>(PageNumbers.pageLocation);
    const [mapCenter, setMapCenter] = useState<LngLatLike>({lat:0,lng:0});
    return (
    <div className="App">
      <div className="content">
          <Menubar setState={setState}/>
          <div className="app-container">
              <ControlPanel state={state}/>
              <MapDisplay controls={[]} center={mapCenter}/>
              {/*<button onClick={()=>setMapCenter({lat:89,lng:63})}>ABC</button>*/}
          </div>
      </div>
    </div>
    );
}

export default App;
