import { createContext } from "react";

type  UserInfoProps ={
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };

  export const UserInfoContext = createContext<UserInfoProps>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  })