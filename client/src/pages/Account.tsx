import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faElevator, faStairs } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../promise/apiClient';
import CardHovalaPrices from '../components/CardHovalaPrices';
import Prices from '../components/Prices';

const defaultTheme = createTheme();

export default function SelectFurniture() {
  const [items, setItems] = useState([]);
  const [prices, setprices] = useState([]);
  const [elevator, setElevator] = useState([]);
  const [floors, setFloors] = useState([]);
  const [distance, setDistance] = useState([]);  
  const [elevatorFrom,setElevatorFrom] = useState("yes");
  const [elevatorTo, setElevatorTo] = useState("yes");
 const navigate= useNavigate();
    const handleChangeRadioFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
       setElevatorFrom(event.target.value);
    };
    const handleChangeRadioTo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setElevatorTo(event.target.value);
    };
    const account = async () => {
      const response = await axiosClient.post("http://localhost:4000/Account", {
        items,prices,elevator,floors,distance
      });
      if (response.status === 200) {
        navigate("/login");
      } else {
        alert("username or password is incorrect");
      }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <main>
                <Container sx={{ py: 4, }} maxWidth="md"   >
                    <Grid container spacing={2}  >
                        <Grid item xs={12} md={6} lg={6}>
                            <Paper
                                sx={{
                                    p: 2,
                                    flexDirection: 'row',
                                    height: 140,
                                    justifyContent:"center"
                                }}
                            > 
                                <div style={{ display: "flex" }}>
                                    <h3  >Floor</h3>
                                    <FontAwesomeIcon
                                        icon={faStairs}
                                        size="2xl"
                                        style={{ color: "#511f31", marginLeft: "7px", marginTop: "15px" }}
                                    />
                                    <Prices/>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <h3 style={{ marginTop: "3px" }}>Elevator</h3>
                                    <FontAwesomeIcon
                                        icon={faElevator}
                                        size="2xl"
                                        style={{ color: "#4e1f51", marginLeft: "20px", marginRight: "20px", }}
                                    />
                                    <Prices/>
                                    </div>
                            </Paper>
                            </Grid >
                            <Grid item xs={12} md={6} lg={6}>
                            <Paper
                                sx={{
                                    p: 2,
                                    flexDirection: 'row',
                                    height: 140,
                                    justifyContent:"center"
                                }}
                            > 
                                <div style={{ display: "flex" }}>
                                    <h3  >Distance</h3>
                                    <LocationOnIcon sx={{marginTop:"20px", marginLeft:"20px"}}/>
                                 
                                </div>
                                <div style={{ display: "flex" }}>
                                    <h3 style={{ marginTop: "3px" }}>1km</h3>
                                    <Prices/>
                                    </div>
                            </Paper>
                        </Grid >
                      
                    </Grid >
                </Container>
                <Container maxWidth="md">
                     <CardHovalaPrices/>
                </Container>
                <Stack
              sx={{ pt: 4 }}
              position="fixed"
              bottom=" 20px"
              right= "5px"
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={()=>navigate("/selectCompany")}>update prices</Button>
            </Stack>
            </main>
        </ThemeProvider>
    );
}