import {allTimezones, useTimezoneSelect} from "react-timezone-select";
import {DefaultProps} from "@/types";
import SelectInput from "atoms/SelectInput";

export type TimezoneInputProps = DefaultProps & {
    label?: string,
    value?: string,
    onChange?: (timezone: string) => void,
}

export default function TimezoneInput(props: TimezoneInputProps) {
    const label = props.label || 'TimezoneInput';
    const labelStyle = 'original';
    const timezones = allTimezones;
    const {options} = useTimezoneSelect({labelStyle, timezones})
    const map = new Map(options.map(option => [option.label, option.value]))
    return <SelectInput label={label} map={map} value={props.value} onChange={value => props.onChange?.(value)}/>;
}