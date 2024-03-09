import {FormControl} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import TextInput from "@/components/atoms/TextInput/index.ts";
import TimezoneInput from "@/components/atoms/TimezoneInput/index.ts";
import {AgencyActions} from "@/store/actions";

export default function AgencyControlPanel() {
    const dispatch = useDispatch();
    const {name, url, timezone} = useSelector((state: RootState) => state.agencyState);
    const handleNameChange = (name: string) => dispatch(AgencyActions.setName(name));
    const handleURLChange = (url: string) => dispatch(AgencyActions.setURL(url));
    const handleTimezoneChange = (timezone: string) => dispatch(AgencyActions.setTimezone(timezone));
    // const handleTransitTypeChange = (transitType: string) => dispatch(setTransitType(transitType));
    // const options = ["tram", "subway, metro", "rail", "bus", "ferry", "cable tram", "aerial lift", "funicular", "trolleybus", "monorail"];
    return <>
        <TextInput label="name" field={name} onFocus={handleNameChange} onChange={handleNameChange}/>
        <TextInput label="url" field={url} onFocus={handleURLChange} onChange={handleURLChange}/>
        <p>timezone</p>
        <FormControl fullWidth>
            <TimezoneInput field={timezone} onChange={handleTimezoneChange}/>
        </FormControl>
        {/*<FormControl fullWidth>*/}
        {/*    <TransitTypeSel label="transit type" field={transitType} options={options} onChange={handleTransitTypeChange}/>*/}
        {/*</FormControl>*/}
    </>


}