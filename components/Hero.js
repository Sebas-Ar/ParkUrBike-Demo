import React from 'react'

const Hero = ({children, entrada, toogleEntrada, state}) => {
    return (
        <div className="container">
            <div className="img">
                <div className="title">
                    <img src="/img/icons/parking.svg" alt=""/>
                    <h1>USTA PARK</h1>
                </div>
                <button onClick={() => toogleEntrada()}>
                    {
                        entrada
                        ?
                        <img className="row" src="/img/icons/arrow-left-solid.svg" alt=""/>
                        :
                            state
                            ?
                            "SALIR"
                            :
                            "ENTRAR"
                    }
                </button>
            </div>
            <br/>
            
            {children}
            <style jsx>{`
            
                .container {
                    position: relative;
                    top:15px;
                    margin:auto;
                    width: 315px;
                    height: 553px;
                    background: #41AAE3DE 0% 0% no-repeat padding-box;
                    opacity: 1;
                    border-radius:30px;
                    box-sizing: border-box;
                    padding: 27px 0;
                }
                .img{
                    width: 257px;
                    height: 134px;
                    background-color: red;
                    background-image: url("/img/USTAPARK.jpeg");
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: 110%;
                    border-radius:30px;
                    margin: auto;
                    position: relative;
                }

                .title {
                    background-color: var(--grayOpacity);
                    position: absolute;
                    left: -12px;
                    bottom: -12px;
                    width: 191px;
                    height: 44px;  
                    box-shadow: 0px 3px 10px #00000078;
                    border-radius:22px;     
                    display: grid;
                    grid-template-columns: 50px auto;
                    align-items: center;
                }

                img {
                    justify-self: center;
                }

                h1 {
                    color: white;
                    font-size: 22px;
                }
                
                button{    
                    position: absolute;
                    right: -12px;
                    bottom: -12px;
                    width: 62px;
                    height: 44px;
                    color: white;
                    background-color: var(--grayOpacity);
                    box-shadow: 0px 3px 10px #00000078;
                    border-radius:22px;
                    font-size: 12px;

                }

                .row {
                    width: 25px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: transform .5s;
                }

                .row:hover {
                    transform: translate(-50%, -50%) scale(1.15);
                }
            `}</style>
        </div>
    )
}

export default Hero
