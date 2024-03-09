import style from './navbar.module.css'
import {DefaultProps, ControlPanel} from "@/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {controlPanels} from "@/data";
import Logo from "@/components/atoms/Logo";
import PreviewButton from "@/components/molecules/PreviewButton";
import SlideMenu from "@/components/molecules/SlideMenu";
import {AppActions} from "@/store/actions";

export type NavbarProps = DefaultProps & {
    disableSlider?: boolean,
    onChange?: (to: ControlPanel) => boolean;
}
export default function Navbar({disableSlider, onChange}: NavbarProps) {
    const dispatch = useDispatch();
    const {controlPanel} = useSelector((state: RootState) => state.appState);
    const handleChange = (c: ControlPanel) => {
        if (onChange && !onChange?.(c)) return;
        dispatch(AppActions.setControlPanel(c));
    }
    return (
        <div className={style.navbar}>
            <Logo/>
            <SlideMenu items={controlPanels} value={controlPanel} onChange={handleChange}
                       disableSlider={disableSlider}/>
            <PreviewButton/>
        </div>
    )

}