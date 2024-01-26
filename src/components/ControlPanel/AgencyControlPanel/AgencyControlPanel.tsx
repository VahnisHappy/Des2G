import {TextInput} from "components/Inputs/Text/TextInput.tsx";
import style from "../ControlPanel.module.css";
import {TimezoneInput} from "components/Inputs/Timezone/TimezoneInput.tsx";
import {FormControl} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {setID, setName, setTimezone, setURL} from "@/store/states/controlPanel.ts";
import {ControlPanel} from "components/ControlPanel/ControlPanel.tsx";
import {setMode} from "@/store/states/map.ts";

export function AgencyControlPanel(){
    const dispatch = useDispatch();
    const {name, url, id, timezone} = useSelector((state: RootState) => state.controlPanelState.agency);
    const handleNameChange = (name: string) => dispatch(setName(name));
    const handleURLChange = (url: string) => dispatch(setURL(url));
    const handleIDChange = (id: string) => dispatch(setID(id));
    const handleTimezoneChange = (timezone: string) => dispatch(setTimezone(timezone));
    dispatch(setMode('point'));
    return <ControlPanel>
        <div>name</div>
        <TextInput label="name" value={name} onChange={handleNameChange} className={style.inputContainer} />
        <div>url</div>
        <TextInput label="url" value={url} onChange={handleURLChange} className={style.inputContainer} />
        <div>ID</div>
        <TextInput label="id" value={id} onChange={handleIDChange} className={style.inputContainer}/>
        <div>timezone</div>
        <FormControl fullWidth>
        <TimezoneInput value={timezone} onChange={handleTimezoneChange} className={style.inputContainer}/>
        </FormControl>
        <div>transit type</div>
    </ControlPanel>
}