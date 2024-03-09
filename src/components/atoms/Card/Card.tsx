import style from './card.module.css';
import React from "react";
import {DefaultProps} from "@/types";
import {Stack} from "@mui/material";

type RouteCardProps = DefaultProps & {
    children: React.ReactNode,
};

export default function Card({children, ...props}: RouteCardProps) {
    return (
        <Stack className={`${style.container} ${props.className}`} style={props.style}>
            {children}
        </Stack>
    );
}
