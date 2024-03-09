import {DefaultProps, Field} from "@/types";
import SelectInput from "@/components/atoms/SelectInput";


export type SimpleSelectInputProps = DefaultProps & {
    label: string,
    options: Array<string>,
    field: Field<string>,
    onChange?: (value: string) => void
}

export default function SimpleSelectInput({options, ...props}: SimpleSelectInputProps) {
    const map = new Map(options.map(option => [option, option]));
    return <SelectInput map={map} {...props}/>;
}