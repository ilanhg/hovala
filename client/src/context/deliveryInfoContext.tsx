import { createContext, useState } from "react";

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
// const InfoProvider = ({ children }: any) => {
//   const [FloorsFrom, setFloorsFrom]: any = useState("");
//   const [FloorsTo, setFloorsTo]: any = useState("");
//   const [selectedValueFrom, setSelectedValueFrom]: any = useState("yes");
//   const [selectedValueTo, setSelectedValueTo]: any = useState("yes");
//   const [fromInfo, setfromInfo]: any = useState([]);
//   const [toInfo, setToInfo]: any = useState([]);

//   return (
//     <DeliveryInfoContext.Provider
//       value={{
//         fromfloors: setFloorsFrom,
//         toFloors: setFloorsTo,
//         fromElevator: setSelectedValueFrom,
//         toElevator: setSelectedValueTo,
//         fromInfo: setfromInfo,
//         toInfo: setToInfo,
//       }}
//     >
//       {children}
//     </DeliveryInfoContext.Provider>
//   );
// };
// export default InfoProvider;
