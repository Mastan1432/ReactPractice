import React, { useContext } from 'react'
import UserContext from './context/UserContext';

const CHild12 = () => {
    const name=useContext(UserContext);
  return (
    <div>{name}</div>
  )
}

export default CHild12;