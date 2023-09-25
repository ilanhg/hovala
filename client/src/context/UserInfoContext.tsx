import { createContext } from "react";

type  UserInfo ={
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };

  export const UserInfoContext = createContext<UserInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  })