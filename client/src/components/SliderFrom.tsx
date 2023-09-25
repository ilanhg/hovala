import   { useContext} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {  Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStairs } from '@fortawesome/free-solid-svg-icons';
import { FurnitureProps } from '../pages/SelectFurniture';
import { DeliveryInfoContext } from '../context/deliveryInfoContext';


  
function valuetext(value: number) {
  return  `${value}`
}
export default function SliderFrom({propsFurniture:{setFromFloors
  }}:FurnitureProps) {
    const info = useContext(DeliveryInfoContext)
    const {fromfloors}= info
 

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setFromFloors(newValue);
    }}

    

  return (
    <Box sx={{ width: 300 }}>
       <Typography id="non-linear-slider" gutterBottom display={'flex'} >
      <h4>Floor:  {fromfloors} </h4>
       <FontAwesomeIcon
       icon={faStairs}
        size="2xl"
        style={{ color: "#511f31", marginLeft: "7px", marginTop: "15px" }} />
      </Typography>
      <Slider
        aria-label="floor"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        onChange={handleChange}
        step={1}
        marks
        min={-4}
        max={30}
      />
      
      
    </Box>
 


  );
}