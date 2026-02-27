import { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
    const [count, setCount] = useState(0);

    const [count1, setCount1] = useState(0);

    // const increment=useCallback(()=>{
    //     setCount(prev => prev + 1);
    // },[count]);


    const increment=useCallback(()=>{
        setCount(prev => prev + 1);
    },[count]);

    const increment1=()=>{
        setCount1(prev => prev + 1);
    }
    
    
  return(
    <div>
       <Child  increment={increment} count={count}/>
       
       {count1}
        <button onClick={increment1}>Increment1</button>
    </div>
  ) ;
}

export default Parent;