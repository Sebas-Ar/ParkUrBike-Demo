import React from 'react'
import Buttons from './Buttons'
import Labels from './Labels'

const AdminRegister = ({readCode, code, onSubmitIngreso, onSubmitSalida, racks, info}) => {
    return (
        <div className="container">
            <h1>Administrar Registro</h1>
            <Labels img="/img/icons/bike.svg" name="Racks Disponibles" value={`${racks.freeRacks} / ${racks.totalRacks}`}/>
            <Buttons toogleProfile={onSubmitIngreso} text="Validar Ingreso" height="47"/>
            <Buttons toogleProfile={onSubmitSalida} text="Validar Salida" height="47"/>
            <input onChange={e => readCode(e)} value={code} type="text" placeholder="Código del Usuario"/>
            <div className="info">
                <span>{info.text ? info.text : '-'}</span>
                <span>{info.value ? info.value : '-'}</span>
            </div>

            <style jsx>{`
            
                .container {
                    position: relative;
                    top: 29px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 315px;
                    height: 447px;
                    background: var(--grayOpacity);
                    border-radius: 52px;
                }
                .container h1{
                    padding-top: 20px;
                    margin: auto;
                    width: 248px;
                    height: 39px;
                    text-align: center;
                    font: normal normal normal 24px/32px Segoe UI;
                    letter-spacing: 0px;
                    color: #FFFFFF;
                    opacity: 1;
                }
                
                .container input{
                    display: block;
                    margin:auto;
                    margin-bottom: 20px;
                    width: 257px;
                    height: 47px;
                    background: #FFFFFF 0% 0% no-repeat padding-box;
                    border-radius: 30px;
                    border: none;
                    opacity: 1;
                    box-sizing: border-box;
                    padding: 0 20px;
                    font-size: 16px;
                    color: var(--blue);
                    text-align: center;
                }

                input::-webkit-input-placeholder {
                    color: var(--blue);
                    text-align: center;
                }

                .info {
                    margin: auto;
                    width: 257px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }

                span {
                    background-color: white;
                    border-radius: 30px;
                    width:110px;
                    height: 47px;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    color: var(--blue);
                    font-weight: 700;
                    font-size: 18px;
                }

                span:nth-child(2) {
                    justify-self: flex-end;
                }
            
            `}</style>
        </div>
    )
}

export default AdminRegister
