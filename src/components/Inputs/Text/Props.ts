import {DefaultProps} from "types/DefaultProps.ts";
export type TextInputProps = DefaultProps & {
    label?: string,
    value?: string,
    onChange?: (value: string) => void
}