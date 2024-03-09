import Button from "@mui/material/Button";

export type BooleanButtonProps = {
    label: string,
    value: boolean,
    onChange?: (value: boolean) => void;
}
export default function BooleanButtonInput({label, value, onChange}: BooleanButtonProps) {
    const handleClick = () => onChange?.(!value);
    return <Button sx={{
        padding: '10px 20px',
        backgroundColor: '#f0f0f0',
        color: '#000',
        textTransform: 'none',
        '&.selected': {
            backgroundColor: '#268aec',
            color: '#fff',
        },
        borderRadius: '35px',
        height: '40px',
    }} className={value ? "selected" : ""} onClick={handleClick}>
        {label}
    </Button>
}