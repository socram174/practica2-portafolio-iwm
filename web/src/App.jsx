import { useState, useEffect } from 'react'
import './App.css'
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import PersonalCard from './components/PersonalCard';

function App() {
  const [user, setUser] = useState(null);

  const obtener = async () => {
    const res = await fetch('http://localhost:3000/api/profile');
    const data = await res.json();
    setUser(data);
  }

  useEffect(()=> {
    obtener();
  },[]);


  if(!user){
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>No se puede conectar a la API</h1>
      </div>
    )
  };


  return (
    <>
    <div className="flex flex-col md:flex-row h-screen gap-1 p-2 bg-gradient-to-r from-black to-black">
      <div className="w-full md:w-1/2 border-2 border-green-500 rounded-md flex justify-center items-center shadow-lg">
        <PersonalCard name={user.name} email={user.email} description={user.description} year={user.year} />
      </div>
      <div className="w-full md:w-1/2 border-2  rounded-md bg-white p-4">
        <h2 className="font-semibold text-5xl">Habilidades</h2>
        <Skills skills={user.skills} />
      </div>

    </div>
    </>
  )
}

export default App
