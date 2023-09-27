import React, { useContext, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UserDetials from '../components/UserDetails';
import OrderReview from '../components/OrderReview';
import { DeliveryInfoContext } from '../context/deliveryInfoContext';
import { useForm } from "react-hook-form";

type Formvalues = {
  firstName: string;
  lastName: string;
  email: string;
  MobileNo: string;
};
export interface SummaryProps{
  propsSummary:{
    setFirstName : Function,
    setLastName : Function,
    setEmail: Function,
    setPhoneNumber: Function
}}


const steps = ['User Detials', 'Review your order'];



export default function Summary({propsSummary}:SummaryProps) {
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <UserDetials propsSummary={propsSummary} />;
      case 1:
        return <OrderReview />;
      default:
        throw new Error('Unknown step');
    }
  }
  const info = useContext(DeliveryInfoContext)
  const {fromInfo, toInfo, date } = info
  console.log(fromInfo)
  console.log(info)
  const [activeStep, setActiveStep] = useState(0);
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const form = useForm<Formvalues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      MobileNo: "",
    },
  });
  const { handleSubmit } = form;
  return (
    <>
      <CssBaseline />
     
      <Container component="form" maxWidth="sm" onSubmit={handleSubmit(handleNext)} sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Typography component="h1" variant="h5" >
            From:{fromInfo}
          </Typography><Typography component="h1" variant="h5">
            To:{toInfo}
          </Typography><Typography component="h1" variant="h5">
            Delivery Date:{date}
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #{Math.floor(Math.random()*1000000)}. We have emailed your order
                confirmation, and you will be contacted shortly by the supplier.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                type='submit'
                  variant="contained"
                  // onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </>
  );
}