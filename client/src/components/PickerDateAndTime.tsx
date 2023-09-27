import { useContext, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Autocomplete, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HomePageProps } from "../pages/HomePage";
import { DeliveryInfoContext } from "../context/deliveryInfoContext";
import { useForm } from "react-hook-form";


type Formvalues = {
  from: string;
  to: string;
  date: string;
  time: string;
};

export default function PickerDateAndTime({
  propsHome: { setFromInfo, setToInfo, setTime, setDate },
}: HomePageProps): JSX.Element {
  const info = useContext(DeliveryInfoContext);
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);

  const { fromInfo, toInfo, time, date } = info;
  // console.log(info)
  const navigate = useNavigate();

  const fromLoactionData = async (search: any) => {
    try {
      const { data } = await axios.post(`http://localhost:4000/api/homepage`, {
        search,
      });
      setFrom(data);
    } catch {
      console.error("Error");
    }
  };
  const toLoactionData = async (search: any) => {
    try {
      const { data } = await axios.post(`http://localhost:4000/api/homepage`, {
        search,
      });
      setTo(data);
      //setOptions
    } catch {
      console.error("Error");
    }
  };
  const form = useForm<Formvalues>({
    defaultValues: {
      from: "",
      to: "",
      date: "",
      time: "",
    },
  });
  const { handleSubmit } = form;
  return (
    <>
      <Container
        component="form"
        onSubmit={handleSubmit(() => navigate("/selectFurniture"))}
        sx={{
          alignItems: "center",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicke,TimePicker,Autocomplete"]}
            sx={{ justifyContent: "center" }}
          >
            <Autocomplete
              fullWidth
              noOptionsText="No locations"
              includeInputInList
              filterSelectedOptions
              options={from.map((result: any) => result.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="From"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) =>
                    fromLoactionData(e.target.value.toLowerCase())
                  }
                  onSelect={() => {
                    setFromInfo(params.inputProps.value);
                    console.log(fromInfo);
                  }}
                />
              )}
            />

            <Autocomplete
              fullWidth
              noOptionsText="No locations"
              options={to.map((result: any) => result.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="To"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => toLoactionData(e.target.value.toLowerCase())}
                  onSelect={() => {
                    setToInfo(params.inputProps.value);
                    console.log(toInfo);
                  }}
                />
              )}
            />

            <DatePicker
            disablePast={true}
              label="Date"
              value={date}
              onChange={(newValue) => {
                newValue = newValue.format("DD/MM/YYYY");
                setDate(newValue);
                console.log(newValue);
              }}
            />
            <TimePicker
              
              label="Time"
              ampm={false}
              value={time}
              onChange={(newValue) => {
                newValue = newValue.format("HH:mm");
                setTime(newValue);
                console.log(newValue);
              }}
            />

            <Button fullWidth variant="contained" type="submit">
              Let's go!
            </Button>
          </DemoContainer>
        </LocalizationProvider>
      </Container>
    </>
  );
}
