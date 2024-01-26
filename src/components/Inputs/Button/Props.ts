import {DefaultProps} from "types/DefaultProps.ts";
import {SxProps, Theme} from "@mui/material";

export type ButtonInputProps = DefaultProps & {
    label: string,
    style?: SxProps<Theme>,
    onClick?: () => void,
}