import "../styles/ControlPanel.css";
import LocationPage from "./ControlPanels/PageLocation";
import AgencyPage, {PageAgencyData} from "./ControlPanels/PageAgency";
import CalendarPage from "./ControlPanels/PageCalendar";
import {PageNumbers} from "./PageNumbers";
import TripPage from "./ControlPanels/PageTrip";

interface IControlPanelProp{
    state: PageNumbers,
    onChange?: (data: PageAgencyData) => void,
}
export const ControlPanel = ({state}: IControlPanelProp) =>{
    return(
       <div className="controlPanel">
           {state === PageNumbers.pageLocation && <LocationPage/>}
           {state === PageNumbers.pageAgency && <AgencyPage/>}
           {state === PageNumbers.pageCalendar && <CalendarPage/>}
           {state === PageNumbers.pageTrip && <TripPage/>}
       </div>
    )
}