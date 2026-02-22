import React, { useState } from 'react'
import ChildMemo from './ChildMemo'

const ParentMemo = () => {

    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);

    const Counter=()=>{
        setCount(count+1);
    }


    const counter1=()=>{
        setCount1(count1+1);
    }

  return (
    <div>
        <button onClick={Counter}>counting</button>
        <h1>{count}</h1>

        <button onClick={counter1}>counting1</button>

        <ChildMemo count={count1}/>
    </div>
  )
}

export default ParentMemo