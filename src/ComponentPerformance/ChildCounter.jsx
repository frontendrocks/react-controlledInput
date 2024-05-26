import React, { useState } from 'react'

const ChildCounter = () => {
     const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count {count}</p>
      <button onClick={()=> setCount(count+1)}>Increment</button><br/>
    </div>
  )
}

export default ChildCounter
