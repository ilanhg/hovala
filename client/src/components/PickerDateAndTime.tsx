import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import StairsIcon from '@mui/icons-material/Stairs';
import ElevatorIcon from '@mui/icons-material/Elevator';

export default function PickerDateAndTime(): JSX.Element {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <DemoContainer components={["DatePicke,TimePicker"]} sx={{  justifyContent:"center"  }}>
        
      <TextField id="outlined-basic" label="from"variant="outlined" />
        <TextField id="outlined-basic" label="to" variant="outlined" />
        <DatePicker label="Date"/>
        <TimePicker label="Time"/>
        <Button variant="contained" disableElevation>
          Let's go!
        </Button> 
      </DemoContainer>
    </LocalizationProvider>
  );
}
