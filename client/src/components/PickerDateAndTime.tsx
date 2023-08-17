import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

export default function PickerDateAndTime(): JSX.Element {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicke,TimePicker"]}>
        <Button variant="contained" disableElevation>
          יאללה לארוז!
        </Button>
        <TimePicker label="זמן להובלה" />
        <DatePicker label="תאריך הובלה" />
        <TextField id="outlined-basic" label="יעד" variant="outlined" />
        <TextField id="outlined-basic" label="מוצא" variant="outlined" />
      </DemoContainer>
    </LocalizationProvider>
  );
}
