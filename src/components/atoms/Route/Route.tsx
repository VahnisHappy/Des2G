import {Route} from "@/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {setRouteId, setRouteName} from "@/store/states/controlPanel";
import {Box, Grid} from "@mui/material";
import TextInput from "@/components/atoms/TextInput";
import style from "./route.module.css"

type RouteProps = {
    route: Route;
}

export default function Route({route}: RouteProps) {
    const dispatch = useDispatch();
    const {routeName, routeId} = useSelector((state: RootState) => state.controlPanelState.route)
    const handleNameChange = (routeName: string) => dispatch(setRouteName(routeName));
    const handleIdChange = (routeId: string) => dispatch(setRouteId(routeId));
    return (
        <div className={style.container}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <div>route</div>
                        <TextInput label="" placeholder="name" field={routeName} onChange={handleNameChange}/>
                        <TextInput label="" placeholder="id" field={routeId} onChange={handleIdChange}/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
