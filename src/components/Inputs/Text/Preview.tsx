import {TextInput} from "components/Inputs/Text/TextInput.tsx";
import React from "react";

export default function TextPreview(){
    const [value, setValue] = React.useState<string>('');
    return <TextInput label="Preview" value={value} onChange={setValue}/>;
}