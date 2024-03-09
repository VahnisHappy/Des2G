import {BooleanDays, DefaultProps} from "@/types";
import {Box, Checkbox, FormControl, FormControlLabel, FormGroup} from "@mui/material";

export type DaysInputProps = DefaultProps & {
    value: BooleanDays,
    onChange?: (days: BooleanDays) => void;
}

export default function DaysInput({value, onChange}: DaysInputProps) {
    const [monday, tuesday, wednesday, thursday, friday, saturday, sunday] = value;
    const handleChange = (index: number) => (_: any, v: boolean) => {
        onChange?.(value.map((x, i) => index === i ? v: x) as BooleanDays);
    }
    return (
        <Box>
            <FormControl>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox checked={monday} onChange={handleChange(0)} name="monday"/>
                    } label="Mon"
                    />
                    <FormControlLabel control={
                        <Checkbox checked={thursday} onChange={handleChange(3)} name="thursday"/>
                    } label="Thu"
                    />
                    <FormControlLabel control={
                        <Checkbox checked={sunday} onChange={handleChange(6)} name="sunday"/>
                    } label="Sun"
                    />
                </FormGroup>
            </FormControl>
            <FormControl sx={{ padding: .5 }}>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox checked={tuesday} onChange={handleChange(1)} name="tuesday"/>
                    } label="Tue"
                    />
                    <FormControlLabel control={
                        <Checkbox checked={friday} onChange={handleChange(4)} name="friday"/>
                    } label="Fri"
                    />
                </FormGroup>
            </FormControl>
            <FormControl sx={{ padding: .5 }}>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox checked={wednesday} onChange={handleChange(2)} name="wednesday"/>
                    } label="Wed"
                    />
                    <FormControlLabel control={
                        <Checkbox checked={saturday} onChange={handleChange(5)} name="saturday"/>
                    } label="Sat"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    )
}



