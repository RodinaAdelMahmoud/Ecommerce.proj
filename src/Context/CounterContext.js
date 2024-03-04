import { createContext, useState } from "react";

export let CounterContext =createContext()

export default function CounterContextProvider(props){
const [counter,setCount] = useState(0)
function changeCounter(){
setCount(Math.random())
}
return <CounterContext.Provider value={{counter,changeCounter}}>
{props.children}
</CounterContext.Provider>

}