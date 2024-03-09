import style from "./buttonInput.module.css"
import Button from '@mui/material/Button';
import {SxProps, Theme} from "@mui/material";
import {DefaultProps} from "@/types";

export type ButtonInputProps = DefaultProps & {
    label: string,
    style?: SxProps<Theme>,
    onClick?: () => void,
}

export default function ButtonInput(props: ButtonInputProps) {
    return <Button sx={{
        '&:hover': {
            backgroundColor: '#2D2D2D'},
        borderRadius: '35px',
        background: '#1D1D1D',
        fontWeight: '600',
        fontSize: '15px',
        minWidth: '16px',
        color: '#fff',
        textTransform: 'none',
        ...props.style
    }} classes={{root: `${style.button} ${props.className}`}} onClick={props.onClick}
                   variant="contained">{props.label}</Button>
}