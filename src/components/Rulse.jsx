
import styled from "styled-components";

const Rulse = () => {
  return (
    <>

     <Rulseset>

      <div className="main-rulse">
         <div className="rulse">
          <h1>How to play dice game</h1>
          <ul>
              <li>Select any number</li>
              <li>Click on dice image</li>
              <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
              <li>if you get wrong guess then  2 point will be dedcuted </li>
          </ul>
        </div>
      </div>
     </Rulseset>
     

    
    </>
  )
}

export default Rulse;


/*==================== Rulse Components Desing ================= */


const Rulseset = styled.div `
 
.main-rulse {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
}

.rulse {
  width: 600px;
  height: 180px;
  background: #FBF1F1;
  padding-left: 20px;
}

.rulse ul {
  margin-top: 20px;
}

.rulse ul li {
  list-style: none;
  font-size: 12px;
  font-family:"poppins", sans-serif;
  line-height: 25px;
  color: black;
  font-weight: 600;
}



.rulse h1 {
  font-size:24px;
  font-family: "poppins",sans-serif;
  font-weight: 800;
  padding-top:20px;

}

`