import {ADate, BooleanDays, Calendar} from "@/types";
import Card from "@/components/atoms/Card";
import {Stack} from "@mui/material";
import style from "@/components/organisms/TripCard/tripCard.module.css";
import ButtonInput from "@/components/atoms/ButtonInput/ButtonInput.tsx";
import TextInput from "@/components/atoms/TextInput/TextInput.tsx";
import DatePickerInput from "@/components/atoms/DatePicker";
// import ExpectationDateInput from "@/components/molecules/ExpectationDateInput";
import DaysInput from "@/components/molecules/DaysInput";

export type CalendarCardProps = {
    calendar: Calendar,
    onDelete?: () => void,
    onChange?: (calendar: Calendar) => void,
}

export default function CalendarCard({calendar, onDelete, onChange}: CalendarCardProps) {
    const handleIDChange = (value: string) => onChange?.({...calendar, id: {value}});
    const handleStartDateChange = (value: ADate | null) => onChange?.({...calendar, startDate: {value}});
    const handleEndDateChange = (value: ADate | null) => onChange?.({...calendar, endDate: {value}});
    const handleDaysChange = (value: BooleanDays) => onChange?.({...calendar, days: value});
    // const handleOperationDateChange = (value: ADate | null) => onChange?.({...calendar, operationDate: {value}});
    // const handleExpectationDateChange = (value: boolean | null) => onChange?.({...calendar, expectationDate: value});
    return <Card>
        <Stack direction="row" spacing={1} className={style.header}>
            <h2>calendar</h2>
            <ButtonInput label="delete" style={{backgroundColor: "red"}} onClick={onDelete}/>
        </Stack>
        <TextInput label="service id" field={calendar.id} onChange={handleIDChange}/>
        <DatePickerInput label="start date" field={calendar.startDate} onChange={handleStartDateChange}/>
        <DatePickerInput label="end date" field={calendar.endDate} onChange={handleEndDateChange}/>
        <DaysInput value={calendar.days} onChange={handleDaysChange}/>
        {/*<hr style={{background: "#000000", height: "1px", border: "none", marginBottom: "7px"}}/>*/}
        {/*<DatePickerInput label="operation date" field={calendar.operationDate} onChange={handleOperationDateChange}/>*/}
        {/*<ExpectationDateInput value={calendar.expectationDate} onChange={handleExpectationDateChange}/>*/}
    </Card>;
}