
import Hero from './components/Hero.jsx';
import Gameplay from './components/Gameplay.jsx';
import { useState } from 'react';
import './App.css'

function App() {
  
  const [isGameStart, setGameStart] = useState(false);

  const toggleGame = () =>{
    setGameStart((prev) => ! prev)
  }

  return (
    <>

    {isGameStart ? <Gameplay/> : <Hero toggle={toggleGame}/>}
     
    
    </>
  )
}

export default App
