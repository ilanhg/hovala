import  React, { useState } from 'react';
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
import { Paper, Radio, SelectChangeEvent} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faElevator } from '@fortawesome/free-solid-svg-icons';
import  Slider  from '../components/Slider'


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SelectFurniture() {

    const [FloorsFrom, setFloorsFrom] =useState("");
    const [FloorsTo, setFloorsTo] = useState("");
    const [selectedValueFrom, setSelectedValueFrom] = useState("yes");
    const [selectedValueTo, setSelectedValueTo] = useState("yes");

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
    <ThemeProvider theme={defaultTheme}>
      <main>
        {/* Hero unit */}
        <Toolbar />
          <Container maxWidth="lg" >
          <Grid container spacing={2} alignItems= "center" justifyContent="start" >
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'inline-block',
                    flexDirection: 'row',
                    height: 240,
                  }}  
                >
                    <h2>From</h2>
                    <div style={{display:"flex"}}>
                     <h3>Elevator</h3>   
          <FontAwesomeIcon
            icon={faElevator}
            size="2xl"
            style={{ color: "#4e1f51" , marginLeft: "20px", marginRight: "20px" , }}
          />
          <h6>yes</h6>
          <Radio 
            checked={selectedValueFrom === "yes"}
            onChange={handleChangeRadioFrom}
            value="yes"
            name="radio-buttons"
            inputProps={{ "aria-label": "yes" }}
            style={{display:"flex"}}
          />
          <h6>No</h6>
          <Radio
            checked={selectedValueFrom === "no"}
            onChange={handleChangeRadioFrom}
            value="no"
            name="radio-buttons"
            inputProps={{ "aria-label": "no" }}
            
          />
        </div>
        <div style={{display:"flex"}}>
          <h3>Floor</h3> 
           <Slider/>
           </div>
                </Paper>
                
              </Grid >
              </Grid >
              
            
{/*              
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
     
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}