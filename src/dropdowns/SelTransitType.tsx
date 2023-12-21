import './TransitTypeStyle.css'
import React from "react";


interface IOption{
    value : string
}
interface ITransitTypeProp extends React.SelectHTMLAttributes<HTMLSelectElement>{
    label? : string,
    options : IOption[],
    value? : string
}
export const TransitType = (props: ITransitTypeProp) => {
    const {label, options, value} = props;
    return (
        <div className="container-transitType" >
            <label></label>
            <select value={value} >
                <option>select transit</option>
                {options.map((option: IOption)=>{
                    return <option>{option.value}</option>
                })}
            </select>
        </div>
    )

}

export default TransitType