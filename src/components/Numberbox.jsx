

import styled from "styled-components";


const Numberbox = ({setEerror, error,selectNumber, setSelectNumber}) => {

 const arryNumner = [1,2,3,4,5,6];
 const numberHandler = (value) =>{
    setSelectNumber(value)
    setEerror("");
 }
  
  return (
    <>
     
     <Numberset>
        <p className="error">{error}</p>
        <div className="numberset">
          
          {
              arryNumner.map((value,i)  => (

              <Box 

              isSelected={value == selectNumber}
              key={i} onClick={() => numberHandler(value)}

              > {value}</Box>
             ))
          }
          
        </div>
        <p>Select Number</p>
     </Numberset>


    </>
  )
}

export default Numberbox


/*======================= Numberbox Components Desing ============ */

const Numberset = styled.div `

.numberset{
  display: flex;
  gap: 10px;
  margin-top: 50px;
  margin-right: 50px;
}

p {
  font-size: 18px;
  padding-right: 50px;
  text-align: end;
  font-family: "poppins",sans-serif;
  font-weight: 800;
  text-transform:capitalize;
  color: black;
  padding-top: 20px;
}

.error {
  color: red;
  font-size: 15px;
  text-transform:lowercase;
  
}


`

const Box = styled.div `

 border: 1px solid black;
 width: 50px;
 height: 50px;
 display: grid;
 place-items:center;
 background-color: ${(props) => props.isSelected ? "black " : "white"};
 color: ${(props) => !props.isSelected ? "black " : "white"};
 font-size:18px;
 font-weight: 800;
 font-family:"poppins",sans-serif;
 
 
`