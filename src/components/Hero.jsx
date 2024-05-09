


import  styled  from 'styled-components';

const Hero = ({toggle}) => {
  return (
     <>

      <Maincontainer>
         <div>
              <div className="main-container">
                <div className="container">
                  <div className="main-herosection">
                    <div className="hero">

                      <div className="background-images">
                        <img src="./public/images/dices 1.png" alt="" />
                      </div>

                      <div className="sideinformation">

                          <div className="text">
                            <h2>DICE GAME</h2>
                          </div>

                          <div className="button">
                              <button onClick={toggle}>Play Now</button>
                          </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
         </div>
      </Maincontainer>
        
     </>
  )
}

export default Hero


/*======================== Hero Componets Desing ============= */


const Maincontainer = styled.div `

.main-herosection .hero {
    display: flex;
    justify-content: space-between;

}

.hero .sideinformation {
    position: absolute;
    bottom: 200px;
    right: 50px;
}

.hero .sideinformation .text{
    margin-bottom: -30px;
   
}

.hero .background-images img {
    width: 65%;
    margin-top: 120px;
    margin-left: 80px
}

.hero .sideinformation .text h2{
   margin-right: 50px;
   font-size: 60px;
   font-family:"poppins", sans-serif;
   font-weight: 800;
}

.hero .sideinformation .button button{
    margin-left: 220px;
    padding: 8px 50px;
    border: none;
    color: #fff;
    background: #000;
    border-radius: 5px;
    margin-top: 30px;
    transition: .3s ;
    border: 1px solid #555;
}

.hero .sideinformation .button button:hover{
    color: #000;
    background: #fff;
    cursor: pointer;
}




`