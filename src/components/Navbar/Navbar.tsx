import style from './Navbar.module.css'
import {NavbarProps} from "@/components/Navbar/Props.ts";
import {RadioInput} from "@/components/Inputs/Radio/RadioInput.tsx";
import React, {useEffect} from "react";
import {Page, pages} from "@/types/Page.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {setPage} from "@/store/states/page.ts";

export function Navbar(props: NavbarProps) {
    const uniqueId = React.useId();
    const sliderRef = React.useRef<HTMLSpanElement>(null);
    const currentPage = useSelector((state: RootState) => state.pageState.page);
    const dispatch = useDispatch();
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        props.onChange?.(currentPage);
        if (props.disableSlider) return;
        const slidePercent = Math.max(0, pages.indexOf(currentPage) * 100);
        slider.style.transform = `translateX(${slidePercent}%)`;
    }, [currentPage, sliderRef]);
    function handleChange(page: string) {
        dispatch(setPage(page as Page));
    }
    return (
        <div className={style.navbar}>
                <div className={style.tabs}>
                    <RadioInput name={`${uniqueId}-navbar`} items={pages} value={currentPage} onChange={handleChange}/>
                    {!props.disableSlider && <span ref={sliderRef} className={style.slider}></span>}
                </div>
        </div>
    )

}