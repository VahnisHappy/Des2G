import style from './stopCard.module.css';
import Card from "@/components/atoms/Card";
import TextInput from "@/components/atoms/TextInput/index.ts";
import ButtonInput from "@/components/atoms/ButtonInput/index.ts";
import {Stack} from "@mui/material";
import {Route} from "@/types";
import ColorInput from "@/components/atoms/ColorInput";
import TransitTypeSel from "@/components/molecules/TransitTypeSel";


type RouteCardProps = {
    route: Route,
    onEdit?: () => void,
    onExitEdit?: () => void,
    onDelete?: () => void,
    onColorChange?: (color: string) => void,
    onChange?: (route: Route) => void,
};

export default function RouteCard({route, onColorChange, onChange, ...props}: RouteCardProps) {

    // const handleDelete = (index: number) => () => dispatch(RouteActions.removeStop(index));
    // const handleChange = (index: number) => (stopTime: StopTime) => dispatch(RouteActions.setStopTime({index, stopTime}));
    const handleIDChange = (value: string) => onChange?.({...route, id: {value}});
    const handleNameChange = (value: string) => onChange?.({...route, name: {value}});
    const handleTransitTypeChange = (value: string) => onChange?.({...route, type: {value}});
    // const handleStopTimesChange = (stopTimes: StopTime[]) => onChange?.({...route, stopTimes})
    return (
        <Card>
            <Stack direction="row" spacing={1} className={style.header}>
                <h2>route</h2>
                <ButtonInput label={route.edit ? "exit edit" : "edit"}
                             onClick={route.edit ? props.onExitEdit : props.onEdit}/>
                <ButtonInput label="delete" style={{backgroundColor: "red"}} onClick={props.onDelete}/>
            </Stack>
            <TextInput label="id" placeholder="id" field={route.id} onChange={handleIDChange}/>
            <TextInput label="name" placeholder="name" field={route.name} onChange={handleNameChange}/>
            <p>transit type</p>
            <TransitTypeSel field={route.type} onChange={handleTransitTypeChange}/>
            <hr style={{background: "#000000", height: "1px", border: "none", marginBottom: "5px",marginTop: "5px"}}/>
            <ColorInput label="color" value={route.color} onChange={onColorChange}/>
        </Card>
    );
}
