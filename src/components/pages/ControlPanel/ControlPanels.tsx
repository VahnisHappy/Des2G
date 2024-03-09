import style from "./controlPanel.module.css";
import {FormControl} from "@mui/material";
import LocationControlPanel from "@/components/templates/LocationControlPanel";
import AgencyControlPanel from "@/components/templates/AgencyControlPanel";
import CalendarControlPanel from "@/components/templates/CalendarControlPanel";
import TripControlPanel from "@/components/templates/TripControlPanel";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {enUS} from "@mui/x-date-pickers/locales";
import {LocalizationProvider} from "@mui/x-date-pickers";
import StopControlPanel from "@/components/templates/StopControlPanel";
import {ControlPanel as ControlPanelT} from "@/types";
import {RootState} from "@/store";
import {useSelector} from "react-redux";
import RouteControlPanel from "@/components/templates/RouteControlPanel";

export default function ControlPanels() {
    const localeText = enUS.components.MuiLocalizationProvider.defaultProps.localeText;
    const renderControlPanel = (panel: ControlPanelT) => {
        switch (panel) {
            case "location":
                return <LocationControlPanel/>
            case "agency":
                return <AgencyControlPanel/>
            case "stops":
                return <StopControlPanel/>
            case "routes":
                return <RouteControlPanel/>
            case "calendar":
                return <CalendarControlPanel/>
            case "trips":
                return <TripControlPanel/>
        }
    }
    const {controlPanel} = useSelector((state: RootState) => state.appState);
    return <div className={style.controlPanel}>
        <LocalizationProvider dateAdapter={AdapterDayjs} localeText={localeText}>
            <FormControl fullWidth>
                {renderControlPanel(controlPanel)}
            </FormControl>
        </LocalizationProvider>
    </div>
}