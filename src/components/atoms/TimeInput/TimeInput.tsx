import {TimePicker} from "@mui/x-date-pickers";
import {Field, Time} from "@/types";
import dayjs, {Dayjs} from "dayjs";

export type TimeInputProps = {
    label: string,
    field: Field<Time | null>,
    onChange?: (time: Time) => void,
}

export default function TimeInput({field, onChange, label}: TimeInputProps) {
    let value: Dayjs | null = null;
    if (field.value)
        value = dayjs().hour(field.value.hour).minute(field.value.minute).second(field.value.second);
    const handleChange = (value: Dayjs | null) => value && onChange?.({
        hour: value.hour(),
        minute: value.minute(),
        second: value.second()
    });
    return <>
        <div>{label}</div>
        <TimePicker views={["hours", "minutes", "seconds"]} timeSteps={{minutes: 1}} ampm={false} sx={{
            marginTop: '5px',
            width: '100%',
            '& .MuiOutlinedInput-root': {
                borderRadius: '12px'
            },
            '& .MuiOutlinedInput-input': {
                height: '40px',
                padding: '0 14px',
            }
        }} value={value} error={field.error} onChange={handleChange}/>
    </>
}