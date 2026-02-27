import React, { useMemo, useState } from 'react'

const Memo = () => {
   const [count,setCount]=useState(0);

    const [count1,setCount1]=useState(0);

   const Counter=()=>{
        setCount(count+1);
    }

    const Counter1=()=>{
        setCount1(count1+1);
    }

  const render =()=>{
     console.log("rendered");
  }

  // useMemo(()=>{
  //   render();
  // },[count1]);
  render(); 


  return (
    <div>
      <button onClick={Counter}>counting</button>
        <h1>{count}</h1>

         <button onClick={Counter1}>counting 1</button>
        <h1>{count1}</h1>
    </div>
  )
}

export default Memo