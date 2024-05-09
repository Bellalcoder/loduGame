
import styled from "styled-components";

const Dicegame = ({roleDice, currentDice}) => {
  return (
    <>
      
     <Maindicegame>
        <div className="main-roledice">
          <div className="roledice">
            <div className="images" onClick={roleDice} >
               <img src={`/public/images/dice_${currentDice}.png`} alt="" />
            </div>
          </div>
            
        </div>
     </Maindicegame>

    
    </>
  )
}

export default Dicegame;


/*================ Dicegame Components Desing ================== */


const Maindicegame = styled.div `
  

  .main-roledice{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .roledice .images img{
    width: 150px;
    height: 150px;
  }

  .roledice .button{
    display: flex;
    flex-direction: column;
    margin-top: 70px;
  }




`