import {TextInputProps} from "./Props.ts";
import {TextField} from "@mui/material";
import React from "react";
import {useDebounce} from "use-debounce";

export function TextInput(props: TextInputProps) {
    const uniqueId = React.useId();
    const [internalValue, setIntervalValue] = React.useState<string>(props.value || '');
    const [debouncedValue] = useDebounce(internalValue, 500);
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => setIntervalValue(e.target.value);
    React.useEffect(() => {
        props.onChange?.(debouncedValue)
    }, [debouncedValue]);
    React.useEffect(() => {
        setIntervalValue(props.value || '')
    }, [props.value]);
    return (
        <div className={props.className}>
            <TextField id={uniqueId} label={props.label} value={internalValue} onChange={handleInputChange} sx={{width: '100%'}}/>
        </div>
    )
}