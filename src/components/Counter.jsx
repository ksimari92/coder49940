import React from 'react'
import { useCount } from '../hooks/useCount'

const Counter = () => {

    const {count, decrement, increment, reset} = useCount(1,0,10);
  return (
    <div>
        <h2>{count}</h2>
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter