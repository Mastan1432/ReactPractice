import React from 'react'

const Child = React.memo(({increment,count}) => {
  console.log(" child rerendered");
  return (
    <div>
        {count}
        <button onClick={increment}>Increment</button>
    </div>
  )
});

export default Child