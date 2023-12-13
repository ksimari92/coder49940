import React, {useState} from 'react'

const Contador = () => {

    const [contador, setContador ] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        setContador(contador - 1);
    }

  return (
    <div>
        <p>Numero: {contador} </p>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>

    </div>
  )
}

export default Contador