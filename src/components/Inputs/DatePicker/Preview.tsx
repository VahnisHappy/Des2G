import {DatePickerInput} from "./DatePickerInput.tsx";
import {Box, FormControl} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
export default function DatePickerPreview(){
    return <Box sx={{ minWidth: '100vw' }}>
        <FormControl fullWidth >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePickerInput label="preview555"  />
            </LocalizationProvider>
        </FormControl>
    </Box>
}