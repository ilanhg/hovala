import { createContext } from "react";

type DeliveryInfo = {
  fromfloors: string;
  toFloors: string;
  fromElevator: string;
  toElevator: string;
  fromInfo: Array<any>;
  toInfo:  Array<any>;
};

export const DeliveryInfoContext = createContext<DeliveryInfo>({
    fromfloors: "",
    toFloors: "",
    fromElevator:"",
    toElevator:"",
    fromInfo:[],
    toInfo:[]
});
