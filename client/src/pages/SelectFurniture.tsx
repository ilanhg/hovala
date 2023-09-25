import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper,} from '@mui/material';
import SliderTo from '../components/SliderTo';
import CardHovala from '../components/CardHovala';
import { useNavigate } from 'react-router-dom';
import { DeliveryInfoContext } from '../context/deliveryInfoContext';
import SliderFrom from '../components/SliderFrom';
import ElevatorFrom from '../components/ElevatorFrom';
import ElevatorTo from '../components/ElevatorTo';


export interface FurnitureProps {
    propsFurniture:{
     setElevatorFrom:Function,
      setElevatorTo: Function,
      setFromFloors: Function,
      setToFloors:Function,
    }
  }

const defaultTheme = createTheme();

export default function SelectFurniture({propsFurniture
}: FurnitureProps): JSX.Element {

    const info = useContext(DeliveryInfoContext)
    const navigate= useNavigate();
    // const [elevatorFrom, setElevatorFrom] = useState("yes");
    // const [elevatorTo, setElevatorTo] = useState("yes");
    // console.log(info.fromInfo)




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
                                    <h2 style={{ marginRight: "20px" }}>From: {info.fromInfo}</h2>
                                </div>
                                <SliderFrom propsFurniture={propsFurniture}  />
                             <ElevatorFrom propsFurniture={propsFurniture}/>
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
                                    <h2 style={{ marginRight: "20px" }}>To: {info.toInfo}</h2>
                                </div>
                                <SliderTo propsFurniture={propsFurniture}/>
                               <ElevatorTo propsFurniture={propsFurniture}/>
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
              <Button variant="contained" onClick={()=>navigate("/summary")}>Select moving company</Button>
            </Stack>
            </main>
        </ThemeProvider>
    );
}