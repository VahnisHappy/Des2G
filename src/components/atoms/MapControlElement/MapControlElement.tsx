import style from "./mapControlElement.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export type ControlElementProps = {
    selected: boolean,
    onSelect: () => void,
    icon: IconDefinition,
    disabled?: boolean,
}
export default function MapControlElement({selected, onSelect, icon, disabled}: ControlElementProps) {
    return <div className={`${style.container} ${selected ? style.selected : ''} ${!disabled ? style.icon_wrapper : ''}`}
                onClick={!disabled ? onSelect : undefined}>
        <FontAwesomeIcon icon={icon} className={style.icon} style={{color: disabled ? "gray" : ""}}/>
    </div>
}