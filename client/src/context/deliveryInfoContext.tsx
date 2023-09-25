import { time } from "console";
import { createContext } from "react";

type DeliveryInfo = {
  
fromfloors: string;
  toFloors: string;
  fromElevator: string;
  toElevator: string;
  fromInfo: string;
  toInfo:  string;
  date: any;
  time: any;
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
