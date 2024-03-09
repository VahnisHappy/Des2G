import React from "react";
import {DefaultProps} from "@/types";

export type RadioInputProps = DefaultProps & {
    name: string,
    items: string[],
    value?: string,
    onChange?: (value: string) => void
}
export default function RadioInput(props: RadioInputProps) {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        props.onChange?.(value);
    }
    const uniqueId = React.useId();
    return props.items.map(item => {
        const id = `${uniqueId}-${item}`;
        return <div key={item}>
            <input type="radio" id={id} name={props.name} onChange={handleChange} value={item}
                   checked={props.value === item}/>
            <label htmlFor={id}>{item}</label>
        </div>;
    })
}