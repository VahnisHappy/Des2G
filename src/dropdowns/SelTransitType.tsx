import './TransitTypeStyle.css'
import React, {ChangeEventHandler, SelectHTMLAttributes, useEffect, useRef, useState} from "react";

interface ITransitTypeValue {
    value: string,
    other?: string,
}
interface IOption{
    value : string
}
interface ITransitTypeProp extends SelectHTMLAttributes<HTMLSelectElement>{
    label? : string,
    options : IOption[],
    value? : ITransitTypeValue
}
export const SelTransitType = (props: ITransitTypeProp) => {
    const [value, setValue] = useState<ITransitTypeValue>(props.value || {
        value: '',
    });
    const {label, options} = props;
    const otherInputRef=useRef<HTMLInputElement|null>(null);
    useEffect(() => {
        const otherInputRefElement = otherInputRef.current;
        if (!otherInputRefElement) return;
        if (value.value==="other") otherInputRefElement.style.display = 'block';
        else otherInputRefElement.style.display='none';
    }, [otherInputRef,value]);
    const onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
        setValue({...value, value: e.target.value});
        props.onChange?.bind(this)(e);
    }
    return (
        <div className="container-transitType" >
            <label></label>
            <select value={value.value} onChange={onChange}>
                <option value="" disabled>select transit</option>
                {options.map((option: IOption) => <option value={option.value}>{option.value}</option>)}
                <option value="other">other</option>
            </select>
            <input ref={otherInputRef} value={value.other || ''}/>
        </div>
    )
}

export default SelTransitType