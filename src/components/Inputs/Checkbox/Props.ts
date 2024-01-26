import React from "react";
import {DefaultProps} from "types/DefaultProps.ts";

export type CheckboxInput = DefaultProps & {
    value: string,
    isChecked?: boolean,
    className?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
