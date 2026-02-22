import React, { useEffect } from 'react'

const ChildMemo = React.memo(({count}) => {
    useEffect(()=>
       console.log("child rerender")
    );

  return (
    <div>
        <h1>Count:{count}</h1>
        ChildMemo
        </div>

  )
}
);

export default ChildMemo