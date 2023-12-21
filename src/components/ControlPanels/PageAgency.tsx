import * as React from "react";
import {ChangeEventHandler, InputHTMLAttributes, useState} from "react";
import TimezoneSelect, {ITimezone} from "react-timezone-select";
import {Timezone} from "../../dropdowns/Timezone";
import SelTransitType from "../../dropdowns/SelTransitType";
import {transitList} from "../../dropdowns/transitTypeData";
export interface PageAgencyData {
    name: string,
    url: string,
    id: string,
    timezone: ITimezone,
    transitType: string,
}
interface IPageAgencyProp {
    value?: PageAgencyData,
    onChange?: (data: PageAgencyData)=>void;
}
export default function(props: IPageAgencyProp) {
    const data = props.value || {
        name: '',
        url: '',
        id: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        transitType: ''
    };
    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        data.name = e.target.value;
        if (props.onChange) props.onChange(data);
    }
    const handleURLChange: ChangeEventHandler<HTMLInputElement> = (e) =>{
        data.url = e.target.value;
        if (props.onChange) props.onChange(data);
    }
    const handleIDChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        data.id = e.target.value;
        if(props.onChange) props.onChange(data);
    }
    const handleTimezoneChange: ChangeEventHandler<HTMLInputElement> = (e)=>{
        data.timezone = e.target.value;
        if(props.onChange) props.onChange(data);
    }
    const handleTransitTypeChange: ChangeEventHandler<HTMLInputElement> = (e) =>{
        data.transitType = e.target.value;
        if(props.onChange) props.onChange(data);
    }
    return (
        <>
            <div className="inputContainer">
                <div className="text">name</div>
                <div><input type="text" placeholder="enter agency’s name" onChange={handleNameChange}/></div>
            </div>
            <div className="inputContainer">
                <div className="text">url</div>
                <div><input  type="text" placeholder="enter agency’s url" onChange={handleURLChange}/></div>
            </div>
            <div className="inputContainer">
                <div className="text">ID</div>
                <div><input  type="text"  placeholder="enter agency’s ID" onChange={handleIDChange} /></div>
            </div>
            <div className="inputContainer">
                <div className="text">time zone</div>
                <TimezoneSelect
                    className="timezoneSelect-container"
                    value={}
                    onChange={handleTimezoneChange}
                />
            </div>
            <div className="inputContainer">
                <div className="text" >transit types</div>
                <SelTransitType onChange={handleTransitTypeChange} options={transitList}/>
            </div>
        </>
    );
}