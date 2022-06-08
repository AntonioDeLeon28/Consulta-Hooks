import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // El useEffect es utilizado para que cuando exista un cambio en el componente (o en alguna parte del componente en particular) se realice una acción

    useEffect( () => {
        // console.log('hey!');
    },[] );

    useEffect( () => {
        // console.log('formState cambió');
    },[ formState  ] ); 

    useEffect( () => {
        // console.log('nombre cambió');
    },[ name ] );

    useEffect( () => {
        // console.log('email cambió');
    },[ email ] );

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

  return (
    <>
        <h1>useEffect</h1>
        <hr />

    <div className='form-group'>
        <input 
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={ name }
            onChange={ handleInputChange }
        />
    </div>
 
    <br></br> {/* Es solo un salto de linea */}

    <div className='form-group'>
        <input 
            type='text'
            name='email'
            className='form-control'
            placeholder='email@gmail.com'
            autoComplete='off'
            value={ email }
            onChange={ handleInputChange }
        />
    </div>
    
    {/* Vamos a renderizar el componente de manera condicionada */}
    {/* { name && <Message /> } Si existe el nombre se va a mostrar el componente */}
    { ( name === '123' ) && <Message /> } 

    </>
  )
}
