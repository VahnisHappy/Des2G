import style from "@/components/organisms/Navbar/navbar.module.css";
import RadioInput from "@/components/atoms/RadioInput";
import React from "react";

export type SlideMenuProps<T extends string> = {
    items: T[],
    value: T,
    onChange?: (value: T) => void,
    disableSlider?: boolean,
}
export default function SlideMenu<T extends string>({items, value, onChange, disableSlider}: SlideMenuProps<T>) {
    const sliderRef = React.useRef<HTMLSpanElement>(null);
    const uniqueId = React.useId();
    React.useEffect(() => {
        const slider = sliderRef.current;
        if (!slider || disableSlider) return;
        const slidePercent = Math.max(0, items.indexOf(value) * 100);
        slider.style.transform = `translateX(${slidePercent}%)`;
    }, [value, items, disableSlider, sliderRef]);
    return <div className={style.tabs}>
        <RadioInput name={`${uniqueId}-slide-menu`} items={items} value={value} onChange={t => onChange?.(t as T)}/>
        {!disableSlider && <span ref={sliderRef} className={style.slider}></span>}
    </div>
}