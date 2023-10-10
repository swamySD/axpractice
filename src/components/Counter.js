import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

    // useEffect(()=>{
    //  let timer=setInterval(()=>{
    //       setCount((prev)=>prev+1)
    //  },1000)

    //  return ()=>clearInterval(timer)
    // },[])

    const decrementHandler=()=>{
     setCount(prev=>prev-1)
    }

    const incremenHandler=()=>{
        setCount(prev=>prev+1)
    }
    const resetHandler=()=>{
        setCount(0)
    }

  return (
    <div style={{display:'flex',flexDirection:'column'
    }}>
        <span style={{textAlign:'center'}}>{count}</span>
        <div>
        <button onClick={incremenHandler}>Increment</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={decrementHandler}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter