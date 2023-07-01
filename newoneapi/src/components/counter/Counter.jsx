import React from 'react'
import { BsPlusCircle, BsPatchMinus } from "react-icons/bs";
import CounterContext from '../contexts/CounterContext';
import { useContext } from 'react';

export const Counter = () => {

  const {counter,increment,decrement}=useContext(CounterContext)
  return (
    <>
    <div className="row">
        <div className="col-md-8 mx-auto">
      <h1> My counter :{counter}</h1>
      
      <button onClick={increment} className="btn btn-secondary mr-2">
        <BsPlusCircle></BsPlusCircle>
      </button>

      <button onClick={decrement}  className="btn btn-info">
        <BsPatchMinus></BsPatchMinus>
      </button>    

        </div>
    </div>

    </>
  )
}

export default Counter
