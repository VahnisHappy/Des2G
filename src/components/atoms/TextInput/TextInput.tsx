import {TextField} from "@mui/material";
import React from "react";
import {DefaultProps, Field} from "@/types";

export type TextInputProps = DefaultProps & {
    label: string,
    field: Field<string>,
    onFocus?: (value: string) => void,
    onChange?: (value: string) => void,
    variant?: 'standard' | 'outlined' | 'filled',
    placeholder?: string
}

export default function TextInput(props: TextInputProps) {
    const uniqueId = React.useId();
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => props.onChange?.(e.target.value);
    const handleFocusChange: React.FocusEventHandler<HTMLInputElement> = e => props.onFocus?.(e.target.value);
    return (
        <div className={props.className}>
            <div>{props.label}</div>
            <TextField id={uniqueId} value={props.field.value} onFocus={handleFocusChange} onChange={handleInputChange} placeholder={props.placeholder} sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    marginBottom: '10px'
                },
                '& .MuiOutlinedInput-input': {
                    height: '40px',
                    padding: '0 14px',
                }
            }} error={props.field.error} />
        </div>
    )
}