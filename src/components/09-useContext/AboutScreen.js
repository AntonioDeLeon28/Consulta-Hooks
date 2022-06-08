import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({});
    }

    return (
        <>
            <main>
                <h1 className='m-2'> About Screen! </h1>
            </main>

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button className='btn btn-warning' onClick={ handleClick }> Logout </button>
        </>
    )
}
