import {FormControl, MenuItem, Select} from "@mui/material";
import React from "react";
import style from "./selectInput.module.css"
import {DefaultProps, Field} from "@/types";

export type SelectInputProps<T extends React.ReactNode, U = string | number> = DefaultProps & {
    label?: string,
    map: Map<U, T>,
    field: Field<U | null>,
    onChange?: (value: U) => void,
}


export default function SelectInput<T extends React.ReactNode, U = string | number>(props: SelectInputProps<T, U>) {
    const uniqueId = React.useId();
    const labelId = `${uniqueId}-label`;
    return <FormControl>
        <div>{props.label}</div>
        <Select className={style.select} value={`${props.field.value}` || ""} error={props.field.error}
                onChange={event => props.onChange?.(event.target.value as U)} labelId={labelId} label={props.label}>
            {[...props.map.entries()].map(([value, item], index) => <MenuItem key={index}
                                                                              value={value}>{item}</MenuItem>)}
        </Select>
    </FormControl>

}