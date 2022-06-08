import { useState } from 'react'

export const useCounter = (initalState = 0) => {

    const [counter, setCounter] = useState(initalState);

    const increment = ( factor = 1 ) => {
        setCounter(counter + factor)
    }    

    const decrement = ( factor = 1 ) => {
        setCounter(counter - factor)
    }    

    const reset = () => {
        setCounter(initalState)
    }    

    return {counter, increment, decrement, reset};
  
}