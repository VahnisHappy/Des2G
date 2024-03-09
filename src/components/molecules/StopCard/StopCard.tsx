import style from './stopCard.module.css';
import {Stop} from '@/types';
import TextInput from '@/components/atoms/TextInput/index.ts';
import ButtonInput from "@/components/atoms/ButtonInput";
import Card from "@/components/atoms/Card";
import {Stack} from "@mui/material";

type StopCardProps = {
    stop: Stop,
    onDelete?: () => void,
    onFocus?: () => void,
    onUnfocused?: () => void,
    onChange?: (stop: Stop) => void
};

export default function StopCard({stop, onChange, onFocus, onUnfocused}: StopCardProps) {
    const handleIDChange = (value: string) => onChange?.({...stop, id: {value}});
    const handleNameChange = (value: string) => onChange?.({...stop, name: {value}});

    return (
        <Card style={{backgroundColor: stop.focus ? "#E0E0E0" : "", transition: "background-color 0.3s"}}>
            <Stack direction="row" spacing={1} className={style.header}>
                <h2>stop</h2>
                <ButtonInput label={stop.focus ? "un-focus" : "focus"} onClick={stop.focus ? onUnfocused : onFocus}/>
            </Stack>
            <TextInput label="id" placeholder="id" field={stop.id} onChange={handleIDChange}/>
            <TextInput label="name" placeholder="name" field={stop.name} onChange={handleNameChange}/>
        </Card>
    );
}
