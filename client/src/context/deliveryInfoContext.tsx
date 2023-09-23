import { createContext } from "react";

type DeliveryInfo = {
  
fromfloors: string;
  toFloors: string;
  fromElevator: string;
  toElevator: string;
  fromInfo: string;
  toInfo:  string;
  date: string;
  time: string;
};

export const DeliveryInfoContext = createContext<DeliveryInfo>({
    fromfloors: "",
    toFloors: "",
    fromElevator:"",
    toElevator:"",
    fromInfo:"",
    toInfo:"",
    date:"",
    time:""
});
