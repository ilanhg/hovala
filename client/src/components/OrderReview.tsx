import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { SummaryProps } from '../pages/Summary';
import { UserInfoContext } from '../context/UserInfoContext';
import { DeliveryInfoContext } from '../context/deliveryInfoContext';


const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

export default function OrderReview({
  propsSummary:{
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber
},}:SummaryProps):JSX.Element {
  const deliveryInfo = useContext(DeliveryInfoContext);
const{fromfloors,toFloors,fromElevator,toElevator,fromInfo,toInfo,date,time}= deliveryInfo;
const userInfo = useContext(UserInfoContext);
const{firstName,lastName,email, phoneNumber} = userInfo;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Name:{firstName}' '{lastName}</Typography>
          <Typography gutterBottom>email:{email}</Typography>
          <Typography gutterBottom>Phone Number:{phoneNumber}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Delivery Info
          </Typography>
          <Typography gutterBottom>From:{fromInfo}, Floors:{fromfloors}, Elevator:{fromElevator}</Typography>
          <Typography gutterBottom>To:{toInfo}, Floors:{toFloors}, Elevator:{toElevator}</Typography>
          <Typography gutterBottom>Date:{date}</Typography>
          <Typography gutterBottom>Time:{time}</Typography>

        </Grid>
      </Grid>
    </>
  );
}