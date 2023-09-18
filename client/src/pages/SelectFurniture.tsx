import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Radio, SelectChangeEvent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faElevator, faStairs } from '@fortawesome/free-solid-svg-icons';
import Slider from '../components/Slider'
import CardHovala from '../components/CardHovala';
import { Navigate, useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SelectFurniture() {
   
    const navigate= useNavigate();
    const [selectedValueFrom, setSelectedValueFrom] = useState("yes");
    const [selectedValueTo, setSelectedValueTo] = useState("yes");

    const handleChangeRadioFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValueFrom(event.target.value);
    };
    const handleChangeRadioTo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValueTo(event.target.value);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <main>
                <Container sx={{ py: 4 }} maxWidth="md"  >
                    <Grid container spacing={2}  >
                        <Grid item xs={12} md={6} lg={6}>
                            <Paper
                                sx={{
                                    p: 2,
                                    // display: 'inline-block',
                                    flexDirection: 'row',
                                    height: 200,
                                }}
                            >   <div style={{ display: "flex", marginLeft: "5px" }}>
                                    <h2 style={{ marginRight: "20px" }}>From:</h2>
                                    <h2 style={{ marginRight: "20px" }}>Date:</h2>
                                    <h2 style={{ marginRight: "20px" }}>Time:</h2>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <h3  >Floor</h3>
                                    <FontAwesomeIcon
                                        icon={faStairs}
                                        size="2xl"
                                        style={{ color: "#511f31", marginLeft: "7px", marginTop: "15px" }}
                                    />
                                </div>
                                <Slider />
                                <div style={{ display: "flex" }}>
                                    <h3 style={{ marginTop: "3px" }}>Elevator</h3>
                                    <FontAwesomeIcon
                                        icon={faElevator}
                                        size="2xl"
                                        style={{ color: "#4e1f51", marginLeft: "20px", marginRight: "20px", }}
                                    />
                                    <h5 style={{ marginTop: "10px" }}>Yes</h5>
                                    <Radio
                                        checked={selectedValueFrom === "yes"}
                                        onChange={handleChangeRadioFrom}
                                        value="yes"
                                        name="radio-buttons"
                                        inputProps={{ "aria-label": "yes" }}
                                        style={{ display: "flex", marginBottom: "40px" }}
                                    />
                                    <h5 style={{ marginTop: "10px" }}  >No</h5>
                                    <Radio
                                        checked={selectedValueFrom === "no"}
                                        onChange={handleChangeRadioFrom}
                                        value="no"
                                        name="radio-buttons"
                                        inputProps={{ "aria-label": "no" }}
                                        style={{ marginBottom: "40px" }}
                                    />
                                </div>
                            </Paper>
                        </Grid >
                        <Grid item xs={12} md={6} lg={6}>
                            <Paper
                                sx={{
                                    p: 2,
                                    // display: 'inline-block',
                                    flexDirection: 'row',
                                    height: 200,
                                }}
                            >
<div style={{ display: "flex", marginLeft: "5px" }}>
                                    <h2 style={{ marginRight: "20px" }}>To:</h2>
                                    <h2 style={{ marginRight: "20px" }}>Date:</h2>
                                    <h2 style={{ marginRight: "20px" }}>Time:</h2>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <h3  >Floor</h3>
                                    <FontAwesomeIcon
                                        icon={faStairs}
                                        size="2xl"
                                        style={{ color: "#511f31", marginLeft: "7px", marginTop: "15px" }}
                                    />
                                </div>
                                <Slider />
                                <div style={{ display: "flex" }}>
                                    <h3 style={{ marginTop: "3px" }}>Elevator</h3>
                                    <FontAwesomeIcon
                                        icon={faElevator}
                                        size="2xl"
                                        style={{ color: "#4e1f51", marginLeft: "20px", marginRight: "20px", }}
                                    />
                                    <h5 style={{ marginTop: "10px" }}>Yes</h5>
                                    <Radio
                                        checked={selectedValueTo === "yes"}
                                        onChange={handleChangeRadioTo}
                                        value="yes"
                                        name="radio-buttons"
                                        inputProps={{ "aria-label": "yes" }}
                                        style={{ display: "flex", marginBottom: "40px" }}
                                    />
                                    <h5 style={{ marginTop: "10px" }}  >No</h5>
                                    <Radio
                                        checked={selectedValueTo === "no"}
                                        onChange={handleChangeRadioTo}
                                        value="no"
                                        name="radio-buttons"
                                        inputProps={{ "aria-label": "no" }}
                                        style={{ marginBottom: "40px" }}
                                    />
                                </div>
                            </Paper>
                        </Grid >
                    </Grid >

                </Container>
                <Container maxWidth="md">
                     <CardHovala/>
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
              <Button variant="contained" onClick={()=>navigate("/selectCompany")}>Select moving company</Button>
            </Stack>
            </main>
        </ThemeProvider>
    );
}