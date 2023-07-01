import CounterContext from "../contexts/CounterContext";
import { useState,useReducer } from "react";
import CounterReducer from "./CounterReducer";
const CounterProvider =({children})=>{

    const initialState={counter:0}
    const[state,dispatch]=useReducer(CounterReducer,initialState)

    const increment =()=>{
        dispatch({type:"INC",payload:5})
      }
  
      const decrement=()=>{
        dispatch({type:"DEC",payload:2000})//payload hia likat3ni bchaal aydecremtnta wla ay t incrementa
      }
    return (
       <CounterContext.Provider value={{
        counter:state.counter , increment,decrement
       }}>
        {children}
       </CounterContext.Provider>

    )
}
export default CounterProvider
//counter:counter==counter

//Reducers homa likibdlo etat d state useReducer