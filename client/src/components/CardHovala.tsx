import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from '../Image/pic-hovala/Data';
import { Grid } from '@mui/material';
import Counter from './Counter';

export default function CardHovala() {
  console.log(data);
  
  return (
    <Grid container spacing={4}>
    {data.map((item:any, index:any) => (
      <Grid item key={item} xs={12} sm={6} md={4}>
      <Card key={index} sx={{ maxWidth: 345 }}>
        <img src={item.src} height ="150px" width="250px"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Counter />  
        </CardContent>
      </Card>
      </Grid>
      
    ))}
  </Grid>
);
    }




