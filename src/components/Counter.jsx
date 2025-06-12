import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {
  const [count,setCount]=useState(0)
  function handleIncrement()
  {
      if(count<=9)
      setCount(count+1)
  }
  function handleDecrement()
  {
      if(count>1)
      setCount(count-1)
  }
  function handleIncrementBy2()
  {
      if(count<=9)
      setCount(count+2)
  }
  function handleDecrementBy2()
  {
      if(count>1)
      setCount(count-2)
  }
  return (
    <>
    <Button text="Increment" handleClick={handleIncrement} color="red" margin="20px"/>
    <Button text="Decrement" handleClick={handleDecrement} color="green" margin="20px"/>
    <Button text="IncrementBy2" handleClick={handleIncrementBy2} color="blue" margin="20px"/>
    <Button text="DecrementBy2" handleClick={handleDecrementBy2} color="yellow" margin="20px"/>
    
    {/* <button onClick={handleIncrement}>Increment</button> */}
    {/* <button onClick={handleDecrement}>Decrement</button> */}
    <span>{count}</span>
    </>
  )
}

export default Counter