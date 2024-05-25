import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)
    // let count = 0;
    const handleClick = () => {
        setCount((currentValue) => {
            const newState = currentValue + 1;
            return newState;
        })
    }
  return (
    <div>
          <h3>Counter</h3>
          <h5>Count : {count}</h5>
          <button type='button' onClick={handleClick}> Increment</button>
    </div>
  )
}

export default Counter
