import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef(); //Genera una referencia que puedes poner en algun elemento del html o variable

    const handleClick = () => {
        // document.querySelector('input').focus();
        // document.querySelector('input').select();
        inputRef.current.select(); //Aqui trabajamos con la parte a donde se hace referencia en la parte del html
    }

  return (
    <div>
        <h1>Focus Screen</h1>

        <input 
            ref={ inputRef } //Aqui ponemos la referencia
            className='form-control'
            placeholder='Su Nombre'
        />

        <button 
            className='btn btn-outline-primary mt-5'
            onClick={ handleClick }
        >
            Focus
        </button>

    </div>
  )
}
