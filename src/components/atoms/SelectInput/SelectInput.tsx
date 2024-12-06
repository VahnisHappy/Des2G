import {FormControl, MenuItem, Select} from "@mui/material";
import React from "react";
import style from "./selectInput.module.css"
import {DefaultProps, Field} from "@/types";

export type SelectInputProps<T, U> = DefaultProps & {
    label?: string,
    map: Map<U, T>,
    field: Field<U | null>,
    onChange?: (value: U) => void,
}


export default function SelectInput(props: SelectInputProps<string, string | number>) {
    const uniqueId = React.useId();
    const labelId = `${uniqueId}-label`;
    const kvs = [...props.map.entries()].map(([k, v]) => ({k, v}))
    return <FormControl>
        <div>{props.label}</div>
        <Select className={style.select} value={`${props.field.value}` || ""} error={props.field.error}
                onChange={event => props.onChange?.(event.target.value)} labelId={labelId} label={props.label}>
            {kvs.map(kv => <MenuItem value={kv.v}>{kv.v}</MenuItem>)}
            {[...props.map.entries()].map(([value, item], index) => <MenuItem key={index} value={value}>{item}</MenuItem>)}
        </Select>
    </FormControl>

}