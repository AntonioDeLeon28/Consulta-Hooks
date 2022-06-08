import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

 const counter_1 = useCounter(0);

  return (
    <>
        <h1>Counter with Hook: { counter_1.state } </h1>
        <hr/>

        <button onClick={ () => counter_1.decrement(1) } className='btn'> - 1 </button>
        <button onClick={ counter_1.reset } className='btn'> Reset </button>
        <button onClick={ () => counter_1.increment(1) } className='btn'> + 1 </button>
    </>
  )
}
