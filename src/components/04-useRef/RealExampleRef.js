import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr />
        { show && <MultipleCustomHooks />}
        {/* <MultipleCustomHooks /> */}
        <button className='btn btn-outline-primary mt-3' onClick={() => {setShow(!show)}}>Show/Hide</button>
    </div>
  )
}
