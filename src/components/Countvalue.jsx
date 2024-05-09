
import styled from "styled-components"


const Countvalue = ({score}) => {
  return (
    <>
      <Countbox>
        <div className="countbox">
           <h1>{score}</h1>
           <p>total score </p>
        </div>
      </Countbox>
    </>
  )
}

export default Countvalue;


/*================ Countvalue Components Desing ========== */


const Countbox = styled.div `

.countbox{
  width: 200px;
  margin-top: 50px;
}

.countbox h1{
  font-size:50px;
  font-weight:800;
  font-family: "poppins",sans-serif;
  text-align: center;
}

.countbox p{
  font-size: 18px;
  text-align: center;
  font-family: "poppins",sans-serif;
  text-transform:capitalize;
}

`
