import { Profiler, useState } from 'react';
import './App.css';
import Home from './components/ContextAPI/Home';
import Profile from './components/ContextAPI/Profile';
import About from './components/ContextAPI/About';
import ParentMemo from './components/REactMemo/ParentMemo';
import Todo from './components/ToDoLis/Todo';
import Memo from './components/UseMemo/Memo';
import Parent from './components/USECALLBACK/Parent';


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
      {/* <Todo/> */}
      {/* <Memo/> */}
      <Parent/>

    </div>
  );
}


export default App;
