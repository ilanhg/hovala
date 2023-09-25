import { useState } from "react";
import { Container, ButtonGroup, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 0,
      borderColor: blueGrey[200]
    },
    "&:hover fieldset": {
      borderColor: blueGrey[300]
    },
    "&.Mui-focused fieldset": {
      borderColor: blueGrey[500]
    },
    "& input": {
      textAlign: "center",
      width: 50,
      color: blueGrey[700]
    }
  }
});

export default function Prices() {
  const [price, setPrice] = useState(0);
  const handleChange = (event:any) => {
     // Extract the numeric part of the input value
     const numericValue = event.target.value.replace(/[^0-9.]/g, '');
    
     // Update the state with the numeric value
     setPrice(Number(numericValue));
  };
  return (
    <Container>
      <ButtonGroup >
        
        <StyledInput  size="small"  onChange={handleChange}  value={`$${price}`}  />
      </ButtonGroup>
    </Container>
  );
}