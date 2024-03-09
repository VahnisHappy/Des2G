import {MuiColorInput} from "mui-color-input";

export type ColorInputProps = {
    label: string,
    value: string,
    onChange?: (color: string) => void,
}
export default function ColorInput({label, value, onChange}: ColorInputProps) {
    return <>
        <div>{label}</div>
        <MuiColorInput format="hex" value={value} onChange={onChange} sx={{
            marginTop: '5px',
            width: '100%',
            '& .MuiOutlinedInput-root': {
                borderRadius: '12px'
            },
            '& .MuiOutlinedInput-input': {
                height: '40px',
                padding: '0 14px',
            }
        }}/>
    </>
}