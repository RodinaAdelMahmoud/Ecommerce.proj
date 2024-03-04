import { createContext, useState } from "react";

export let userContext =createContext();

export default function UserContextProvider(myProps){
const [userToken,setToken]=useState(null);
const [userData,setUserData]=useState(null);
return  <userContext.Provider value={{userToken,setToken,setUserData ,userData}}>
{myProps.children}
</userContext.Provider>
}

