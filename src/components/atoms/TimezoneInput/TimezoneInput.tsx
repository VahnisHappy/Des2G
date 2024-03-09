import {allTimezones, useTimezoneSelect} from "react-timezone-select";
import {DefaultProps, Field} from "@/types";
import SimpleSelectInput from "@/components/atoms/SimpleSelectInput";

export type TimezoneInputProps = DefaultProps & {
    label?: string,
    field: Field<string>,
    onChange?: (timezone: string) => void,
}

export default function TimezoneInput(props: TimezoneInputProps) {
    const labelStyle = 'original';
    const timezones = allTimezones;
    const {options} = useTimezoneSelect({labelStyle, timezones})
    return <SimpleSelectInput label={props.label || ''}  options={options.map(({value}) => value)} field={props.field} onChange={value => props.onChange?.(value)}/>;
}