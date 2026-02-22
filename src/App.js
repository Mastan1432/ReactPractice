import { Profiler, useState } from 'react';
import './App.css';
import Home from './components/ContextAPI/Home';
import Profile from './components/ContextAPI/Profile';
import About from './components/ContextAPI/About';
import ParentMemo from './components/REactMemo/ParentMemo';
import Todo from './components/ToDoLis/Todo';


function App() {
  const[user,setUser]=useState("Hasiya");

  // fetch data
  // setuser

  return (
    <div className="App">

      {/* <Home user={user}/>
      <Profile user={user}/>
      <About user={user}/>
      <ParentMemo/> */}
      <Todo/>

    </div>
  );
}


export default App;
