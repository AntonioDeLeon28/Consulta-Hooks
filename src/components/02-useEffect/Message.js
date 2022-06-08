

import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coordenadas, setCoordenadas] = useState( {x:0, y:0} );
    const { x, y } = coordenadas;

    useEffect(() => {

      console.log('Componente Montado');

      const mouseMove = ({ x, y }) => {
          const coords = { x, y };
          setCoordenadas(coords);
        //   console.log(coords);
      }

      window.addEventListener( 'mousemove', mouseMove )
      
      return () => {
          console.log('Componente desmontado');
          window.removeEventListener( 'mousemove', mouseMove );
      }
    }, [])

  return (
    <div>
        <hr />
        <h3>Eres Genial!</h3>
        <p>
            X: {x} Y: {y}
        </p>
        <hr />
    </div>
  )
}
