import React, { useContext } from 'react'
import UserContext from './context/UserContext';

const Child4 = () => {
    const user=useContext(UserContext);

  return (
    <div>{user}</div>
  )
}

export default Child4