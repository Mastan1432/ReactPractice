import React, { createContext, useContext } from 'react'
import Child1 from './Child1';
import UserContext from './context/UserContext';

const Home = ({user}) => {
    //  const name="mastan";

  return (
    <div>
        {user}
        <UserContext.Provider value={user} >
            <Child1/>
        </UserContext.Provider>
        {/* <Child1/> */}
    </div>
  )
}

export default Home