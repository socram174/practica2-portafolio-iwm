import { useState, useEffect } from 'react'
import './App.css'
import Hobbies from './components/Hobbies';

function App() {
  const [user, setUser] = useState({});

  const obtener = async () => {
    const res = await fetch('http://localhost:3000/api/profile');
    const data = await res.json();
    console.table(data);
    setUser(data);
  }

  useEffect(()=> {
    obtener();
  },[]);



  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Commit inicial frontend
    </h1>
    <Hobbies hobbies={user.hobbies}/>
    </>
  )
}

export default App
