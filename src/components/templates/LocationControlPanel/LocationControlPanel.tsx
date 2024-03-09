import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import TextInput from "@/components/atoms/TextInput/index.ts";
import ButtonInput from "@/components/atoms/ButtonInput/index.ts";
import {Stack} from "@mui/material";
import {search} from "@/services/Mapbox";
import {AppActions, MapActions} from "@/store/actions";

export default function LocationControlPanel() {
    const dispatch = useDispatch();
    const {location} = useSelector((state: RootState) => state.mapState);
    const handleLocationChange = (value: string) => dispatch(MapActions.setLocation(value));
    const handleSearch = async () => {
        const bounds = await search(location.value);
        if (bounds) dispatch(AppActions.setControlPanel("agency"));
        dispatch(MapActions.setBounds(bounds));
    }
    return <Stack spacing={2}>
        <TextInput label="location" field={location} onChange={handleLocationChange}/>
        <ButtonInput label="search" style={{marginLeft: 'auto'}} onClick={() => handleSearch()}/>
    </Stack>
}