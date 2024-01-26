import {CheckboxInput} from "@/components/Inputs/Checkbox/Props.ts";

export function CheckboxInput(props: CheckboxInput){
    // TODO: ไม่ผ่าน
    return <input type="checkbox" value={props.value} checked={props.isChecked} onChange={props.onChange}/>
}