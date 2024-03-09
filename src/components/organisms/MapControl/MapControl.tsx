import style from './mapControl.module.css';
import {ControlPosition} from "react-map-gl";
import {Mode} from "@/types";
import {menuIcons, modes} from "@/data";
import MapControlElement from '@/components/atoms/MapControlElement';
import {RootState} from "@/store";
import {useDispatch, useSelector} from "react-redux";
import {AppActions} from "@/store/actions";

export type MapControlProps = {
    position: ControlPosition;
    hidden?: boolean;
    onChange?: (mode: Mode) => void;
}

export default function MapControl({position, hidden, onChange}: MapControlProps) {
    const dispatch = useDispatch();
    const {mode, edited} = useSelector((state: RootState) => state.appState);
    const handleSelect = (m: Mode) => () => {
        dispatch(AppActions.setMode(m));
        onChange?.(m);
    }
    return !hidden ? <div className={`${style.container} ${style[position]}`}>
        {modes.map(m => <MapControlElement key={m} icon={menuIcons[m]} selected={mode === m}
                                           onSelect={handleSelect(m)} disabled={m === "draw" && !edited}/>)}
    </div> : null;
}
