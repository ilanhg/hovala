import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  faElevator,
  faHouse,
  faStairs,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "@mui/material";
import Radio from "@mui/material/Radio";


export default function PickerDateAndTime(): JSX.Element {
  const [Rooms, setRooms] = React.useState("");
  const [FloorsFrom, setFloorsFrom] = React.useState("");
  const [FloorsTo, setFloorsTo] = React.useState("");
  const [selectedValueFrom, setSelectedValueFrom] = React.useState("yes");
  const [selectedValueTo, setSelectedValueTo] = React.useState("yes");

  const handleChangeRooms = (event: SelectChangeEvent) => {
    setRooms(event.target.value as string);
  };
  const handleChangeFloorsFrom = (event: SelectChangeEvent) => {
    setFloorsFrom(event.target.value as string);
  };
  const handleChangeFloorsTo = (event: SelectChangeEvent) => {
    setFloorsTo(event.target.value as string);
  };
  const handleChangeRadioFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValueFrom(event.target.value);
  };
  const handleChangeRadioTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValueTo(event.target.value);
  };
  return (
    <>
    <Container   sx={{
            alignItems: "center",}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer 
          components={["DatePicke,TimePicker"]}
          sx={{ justifyContent: "center" }}
        >
          <TextField id="outlined-basic" label="from" variant="outlined" />
          <TextField id="outlined-basic" label="to" variant="outlined" />
          <DatePicker label="Date" />
          <TimePicker label="Time" />
          <Button sx={{width:"150px"}} variant="contained" >
            Let's go!
          </Button>
          
        </DemoContainer>
        <Container  
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {/* <h3 >Rooms</h3>
      <FontAwesomeIcon  icon={faHouse} size="2xl" style={{ color: "#511f4b", marginLeft:"10px" }}  />
      <Box sx={{mr:20, ml:2}}>
      <FormControl  size="small">
        <InputLabel id="demo-simple-select-label">Rooms</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Rooms}
          label="House"
          placeholder="House"
          onChange={handleChangeRooms}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
        </Select>
      </FormControl>
    </Box> */}

          <h3>Elevator</h3>
          <FontAwesomeIcon
            icon={faElevator}
            size="2xl"
            style={{ color: "#4e1f51", marginLeft: "7px", marginRight: "7px" }}
          />
          <h6>yes</h6>
          <Radio
            checked={selectedValueFrom === "yes"}
            onChange={handleChangeRadioFrom}
            value="yes"
            name="radio-buttons"
            inputProps={{ "aria-label": "yes" }}
          />
          <h6>No</h6>
          <Radio
            sx={{ mr: 1 }}
            checked={selectedValueFrom === "no"}
            onChange={handleChangeRadioFrom}
            value="no"
            name="radio-buttons"
            inputProps={{ "aria-label": "no" }}
          />
          <h3>Elevator </h3>
          <FontAwesomeIcon
            icon={faElevator}
            size="2xl"
            style={{ color: "#4e1f51", marginLeft: "7px", marginRight: "7px" }}
          />
          <h6>yes</h6>
          <Radio
            checked={selectedValueTo === "yes"}
            onChange={handleChangeRadioTo}
            value="yes"
            name="radio-buttons"
            inputProps={{ "aria-label": "yes" }}
          />
          <h6>No</h6>
          <Radio
            sx={{ mr: 1 }}
            checked={selectedValueTo === "no"}
            onChange={handleChangeRadioTo}
            value="no"
            name="radio-buttons"
            inputProps={{ "aria-label": "no" }}
          />
        </Container>
        <Container
          fixed
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <h3 style={{ marginLeft: "30px" }}>Stairs</h3>
          <FontAwesomeIcon
            icon={faStairs}
            size="2xl"
            style={{ color: "#511f31", marginLeft: "7px" }}
          />

          <Box sx={{ mr: 10, ml: 2 }}>
            <FormControl size="small">
              <InputLabel id="demo-simple-select-label">Floors</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={FloorsFrom}
                label="Floors"
                placeholder="Floors"
                onChange={handleChangeFloorsFrom}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <h3 style={{ marginLeft: "10px" }}>Floor</h3>
          <FontAwesomeIcon
            icon={faStairs}
            size="2xl"
            style={{ color: "#511f31", marginLeft: "7px" }}
          />

          <Box sx={{ ml: 2 }}>
            <FormControl size="small">
              <InputLabel id="demo-simple-select-label">Floors</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={FloorsTo}
                label="Floors"
                placeholder="Floors"
                onChange={handleChangeFloorsTo}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Container>
      </LocalizationProvider>
      </Container>
    </>
  );
}
