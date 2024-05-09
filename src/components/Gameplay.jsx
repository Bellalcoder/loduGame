
import styled from "styled-components";
import Countvalue  from "./Countvalue.jsx";
import Numberbox from "./Numberbox.jsx";
import Dicegame from "./Dicegame.jsx";
import Rulse from "./Rulse.jsx";
import {useState} from "react";

const Gameplay = () => {
  const [score ,setScore ] = useState(0);
  const [selectNumber , setSelectNumber] = useState();
  const [currentDice, setCurrentdice] = useState(1)
  const [error , setError] = useState("");
  const [showRulse , showSetRulse] = useState(false);
  
  const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
  }
  
  const roleDice = () => {
     
    if(!selectNumber) {
      setError("You have not select any number")
      return
    }
    setError("");

    const setRandomNumber = randomNumber(1,7);
     setCurrentdice((prev) => setRandomNumber)

     if(selectNumber == setRandomNumber ){
       setScore((prev) => prev + setRandomNumber)
     }else{
      setScore((prev) => prev -2)
     }
     setSelectNumber(undefined)
  }

  const resetScore = () =>{
    setScore(0)
  }

  

  
  
  return (
    <>

     <Maingame>
      <div className="game">
        <Countvalue score={score}/>
        <Numberbox selectNumber={selectNumber} setSelectNumber={setSelectNumber} error={error} setError={setError}/>
      </div>
      <Dicegame currentDice={currentDice}  roleDice={roleDice}/>
        <div className="button">
          <button onClick={resetScore}>Reset Score</button>
          <button onClick={() => showSetRulse((prev) => !prev)} > {showRulse ? "Hide" : "Show"}Roules</button>
        </div>
        {showRulse && <Rulse/>}
     </Maingame>


    </>
  )
}

export default Gameplay;


/*====================== Gameplay Componetns Desing  =========================== */

const Maingame = styled.div `

.game{
  display: flex;
  justify-content: space-between;
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button button{
  margin-top: 20px;
  padding: 8px 30px;
  border: none;
  background: black;
  color: white;
  border-radius: 5px;
  
}

.button button:nth-child(1){
  background-color: white;
  color: black;
  border: 1px solid #555;
  transition: .3s;
}

.button button:nth-child(1):hover{
  background: black;
  color: white;

}

.button button:nth-child(2){
  border: 1px solid black;
}

.button button:nth-child(2):hover{
  background-color: white;
  color: black;
  transition: .3s;
}




`
