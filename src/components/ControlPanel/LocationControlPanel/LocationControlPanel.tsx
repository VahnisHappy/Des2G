import {TextInput} from "components/Inputs/Text/TextInput.tsx";
import {ButtonInput} from "components/Inputs/Button/ButtonInput.tsx";
import style from "../ControlPanel.module.css";
import Geocoding from "@mapbox/mapbox-sdk/services/geocoding";
import {useDispatch, useSelector} from "react-redux";
import {setBounds, setMode} from "@/store/states/map.ts";
import {setLocation} from "@/store/states/controlPanel.ts";
import {RootState} from "@/store";
import {ControlPanel} from "components/ControlPanel/ControlPanel.tsx";

const geocoding = Geocoding({accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || ''})
export function LocationControlPanel() {
    const dispatch = useDispatch();
    const {location} = useSelector((state: RootState) => state.controlPanelState.location);
    const handleLocationChange = (location: string) => dispatch(setLocation(location))
    const handleSearch = async () => {
        const response = await geocoding.forwardGeocode({
            query: location,
            limit: 1
        }).send();
        if (!response.body.features.length) return;
        const feature = response.body.features[0];
        if (!feature.bbox) return;
        dispatch(setBounds(feature.bbox))
    }
    dispatch(setMode('cursor'))
    return <div className={style.controlPanel}>
        <ControlPanel>
            <div>search location</div>
            <TextInput label="location" className={style.inputContainer} value={location} onChange={handleLocationChange}/>
            <div className={style.btnContainer}>
                <ButtonInput label="search" className={style.btn} style={{marginLeft: 'auto'}} onClick={() => handleSearch()}/>
            </div>
        </ControlPanel>
    </div>
}