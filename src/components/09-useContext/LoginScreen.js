import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  const usuario = {
    id: 123,
    name: 'Antonio',
  }

  return (
    <>
      <main>

        <h1 className='m-2'> Login Screen! </h1>

        <button className='btn btn-primary' onClick={ () => { setUser(usuario) } }> Login </button>

      </main>
    </>
  )
}
