import React from 'react'
import Buttons from './Buttons'

const UserProfile = ({toogleProfile}) => {
    return (
        <div className="container">

            <div className="img"></div>
            <p>Nombre Encargado</p>
            <Buttons toogleProfile={toogleProfile} text="Administrar Registro" height="56"/>
            <Buttons toogleProfile={() => {}} text="Ver información" height="56"/>
            
            <style jsx>{`
            
                .container {
                    position: relative;
                    top: 132px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 315px;
                    height: 324px;
                    background: var(--blueOpacity);
                    border-radius: 52px;
                }

                .img {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    width: 140px;
                    height: 140px;
                    border-radius: 50%;
                    background-image: url("/img/icons/user-solid.svg");
                    background-repeat: no-repeat;
                    background-position: center center;
                    border: 3px solid #41AAE3;
                }

                p {
                    text-align: center;
                    padding-top: 85px;
                    color: white;
                    font-size: 22px
                }
            
            `}</style>
        </div>
    )
}

export default UserProfile
