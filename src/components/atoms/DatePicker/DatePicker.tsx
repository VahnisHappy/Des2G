import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs, {Dayjs} from "dayjs";
import {DefaultProps, ADate, Field} from "@/types";


export type DatePickerInputProps = DefaultProps & {
    label: string,
    field: Field<ADate | null>,
    onChange?: (value: ADate | null) => void
}

export default function DatePickerInput({label, field, onChange}: DatePickerInputProps) {
    const handleChange = (x: Dayjs | null) => {
        if (!x) return onChange?.(null);
        onChange?.({
            date: x.date(),
            month: x.month(),
            year: x.year()
        })
    }
    const toDayjs = (date: ADate | null): Dayjs | null => {
        if (!date) return null;
        return dayjs(new Date(date.year, date.month, date.date))
    }
    return <>
        <div>{label}</div>
        <DatePicker value={toDayjs(field.value)} onChange={handleChange} sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
                borderRadius: '12px'
            },
            '& .MuiOutlinedInput-input': {
                height: '40px',
                padding: '0 14px',
            }
        }}/>
    </>
}