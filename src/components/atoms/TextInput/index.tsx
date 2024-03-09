import {TextField} from "@mui/material";
import React from "react";
import {useDebounce} from "use-debounce";
import {DefaultProps} from "@/types";

export type TextInputProps = DefaultProps & {
    value: string,
    label: string,
    onChange?: (value: string) => void,
    variant?: 'standard' | 'outlined' | 'filled'
}

export default function TextInput(props: TextInputProps) {
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
            <TextField id={uniqueId} label={props.label} value={internalValue} onChange={handleInputChange} sx={{
                marginTop: '5px',
                width: '100%',
                '& .MuiOutlinedInput-root': {
                    borderRadius: '30px'
                },
                '& .MuiOutlinedInput-input': {
                    height: '40px',
                    padding: '0 14px',
                }
            }}/>
        </div>
    )
}

