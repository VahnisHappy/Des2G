import {ButtonInputProps} from "components/Inputs/Button/Props.ts";
import style from "./ButtonInput.module.css"
import Button from '@mui/material/Button';

export function ButtonInput(props: ButtonInputProps) {
    return <Button sx={{
        borderRadius: '35px',
        background: '#000000',
        fontWeight: '600',
        fontSize: '16px',
        minWidth: '16px',
        color: '#fff',
        textTransform: 'none',
        ...props.style
    }} classes={{root: `${style.button} ${props.className}`}} onClick={props.onClick}>{props.label}</Button>
}