import  React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { SelectChangeEvent } from '@mui/material';

function valuetext(value: number) {
  return `${value}`;
}

export default function DiscreteSlider() {

  return (
    <Box sx={{ width: 300 }}>
      
      <Slider
        aria-label="floor"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={-4}
        max={30}
      />
    </Box>
 


  );
}