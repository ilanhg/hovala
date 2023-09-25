import { faElevator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Radio } from '@mui/material'
import React, { useContext } from 'react'
import { FurnitureProps } from '../pages/SelectFurniture';
import { DeliveryInfoContext } from '../context/deliveryInfoContext';

export default function ElevatorTo({propsFurniture: {
    setElevatorTo,
  }
}: FurnitureProps): JSX.Element {

    const info = useContext(DeliveryInfoContext)
    const {toElevator}= info


    const handleChangeRadioTo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setElevatorTo(event.target.value);
    };
  return (
    <div style={{ display: "flex" }}>
                                    <h3 style={{ marginTop: "3px" }}>Elevator</h3>
                                    <FontAwesomeIcon
                                        icon={faElevator}
                                        size="2xl"
                                        style={{ color: "#4e1f51", marginLeft: "20px", marginRight: "20px", }}
                                    />
                                    <h5 style={{ marginTop: "10px" }}>Yes</h5>
                                    <Radio
                                        checked={toElevator === "yes"}
                                        onChange={handleChangeRadioTo}
                                        value="yes"
                                        name="radio-buttons"
                                        inputProps={{ "aria-label": "yes" }}
                                        style={{ display: "flex", marginBottom: "40px" }}
                                    />
                                    <h5 style={{ marginTop: "10px" }}  >No</h5>
                                    <Radio
                                        checked={toElevator === "no"}
                                        onChange={handleChangeRadioTo}
                                        value="no"
                                        name="radio-buttons"
                                        inputProps={{ "aria-label": "no" }}
                                        style={{ marginBottom: "40px" }}
                                    />
                                </div>
  )
}
