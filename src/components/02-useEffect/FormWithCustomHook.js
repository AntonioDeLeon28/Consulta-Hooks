import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustonHooK = () => {

    const [formState, setFormState] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formState;

    const handleSubmit = (e) => {
        e.preventDefault(); //Evita que se refresque el navegador cuando se da enter osea un "submit"
        console.log( formState );
    }

  return (
    <form onSubmit={ handleSubmit }>
        <h1>FormWithCustomHooK</h1>
        <hr />

    <div className='form-group'>
        <input 
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={ name }
            onChange={ setFormState }
        />
    </div>
 
    <br />

    <div className='form-group'>
        <input 
            type='text'
            name='email'
            className='form-control'
            placeholder='email@gmail.com'
            autoComplete='off'
            value={ email }
            onChange={ setFormState }
        />
    </div>

    <br />

    <div className='form-group'>
        <input 
            type='password'
            name='password'
            className='form-control'
            placeholder='******'
            autoComplete='off'
            value={ password }
            onChange={ setFormState }
        />
    </div>

    <br />
    <button type='submit' className='btn btn-primary'>Guardar</button>
    
    </form>
  )
}
