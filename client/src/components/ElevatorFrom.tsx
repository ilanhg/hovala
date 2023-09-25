import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Radio } from '@mui/material'
import React, { useContext } from 'react'
import { FurnitureProps } from '../pages/SelectFurniture';
import { DeliveryInfoContext } from '../context/deliveryInfoContext';
import { faElevator } from '@fortawesome/free-solid-svg-icons';

export default function ElevatorFrom({propsFurniture: {
    setElevatorFrom,
  }
}: FurnitureProps): JSX.Element {

    const info = useContext(DeliveryInfoContext)
    const {fromElevator}= info


    const handleChangeRadioFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setElevatorFrom(event.target.value);
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
                                        checked={fromElevator === "yes"}
                                        onChange={handleChangeRadioFrom}
                                        value="yes"
                                        name="radio-buttons"
                                        inputProps={{ "aria-label": "yes" }}
                                        style={{ display: "flex", marginBottom: "40px" }}
                                    />
                                    <h5 style={{ marginTop: "10px" }}  >No</h5>
                                    <Radio
                                        checked={fromElevator=== "no"}
                                        onChange={handleChangeRadioFrom}
                                        value="no"
                                        name="radio-buttons"
                                        inputProps={{ "aria-label": "no" }}
                                        style={{ marginBottom: "40px" }}
                                    />
                                </div>
  )
  }
