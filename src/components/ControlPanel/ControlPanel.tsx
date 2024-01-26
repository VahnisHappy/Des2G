import style from "./ControlPanel.module.css";
import {FormControl} from "@mui/material";

export function ControlPanel({children}:{children: any}) {
    return <div className={style.controlPanel}>
        <FormControl fullWidth>
            {...children}
        </FormControl>
    </div>
}