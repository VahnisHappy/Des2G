import {DefaultProps, Field} from "@/types";
import SimpleSelectInput from "@/components/atoms/SimpleSelectInput";
import {transitTypes} from "@/data";

export type TransitTypeSelProps = DefaultProps & {
    label?: string,
    field: Field<string>,
    onChange?: (transit: string) => void
}

export default function TransitTypeSel(props: TransitTypeSelProps) {
    return <SimpleSelectInput label={props.label || ''}  options={transitTypes} field={props.field} onChange={value => props.onChange?.(value)} />
}