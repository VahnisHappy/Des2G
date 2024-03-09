import {useDispatch, useSelector} from "react-redux";
import {Stack} from "@mui/material";
import ButtonInput from "@/components/atoms/ButtonInput/ButtonInput.tsx";
import {createCalendar} from "@/factory";
import {CalendarActions} from "@/store/actions";
import {RootState} from "@/store";
import CalendarCard from "@/components/organisms/CalendarCard";
import {Calendar, CalendarIndex} from "@/types";

export default function CalendarControlPanel() {
    const calendars = useSelector((state: RootState) => state.calendarState.data);
    const dispatch = useDispatch();
    const handleChange = (index: number) => (calendar: Calendar) =>{
        const c_calendar = [...calendars];
        c_calendar[index] = calendar;
        dispatch(CalendarActions.setCalendar(c_calendar));
    }
    const handleDelete = (index: CalendarIndex) => () => dispatch(CalendarActions.removeCalendar(index));
    return <>
        {calendars.length ? <Stack direction="column">{calendars.map((calendar, index) =>
            <CalendarCard key={index} calendar={calendar} onChange={handleChange(index)}
                          onDelete={handleDelete(index)} />)}
        </Stack> : <div style={{textAlign: "center"}}>
            <div>--- no calendar ---</div>
            <div style={{fontSize: '10px'}}>you can create new one!</div>
        </div>}
        <ButtonInput label="add" onClick={() => dispatch(CalendarActions.addCalendar(createCalendar()))} />
    </>
}