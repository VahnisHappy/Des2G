import {DefaultProps} from "types/DefaultProps.ts";
import {ITimezoneOption} from "react-timezone-select";

export type TimezoneInputProps = DefaultProps & {
    label?: string,
    value?: string,
    onChange?: (timezone: string) => void,
}