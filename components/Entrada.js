import React from 'react'

const Entrada = ({onSubmit, code, state}) => {
    return (
        <div className="container">
            
            <h1>{state ? 'salir del' : 'entrar al'} biciparqueadero</h1>
            <p>Suministrado el código al encargado del biciparqueadero</p>
            <form onSubmit={ e => onSubmit(e)}>
                <button>Generar código de {state ? 'salida' : 'entrada'}</button>
                <p>{code ? code : 'codigo'}</p>
            </form>

            <style jsx>{`
            
                h1 {
                    text-align: center;
                    color: white;
                    font-size: 24px;
                    text-transform: uppercase;
                    margin: 50px 0 20px;
                }

                p {
                    color: white;
                    text-align: center;
                    margin: 15px 0;
                }

                form p {
                    width: 257px;
                    height: 40px;
                    border: none;
                    border-radius: 30px;
                    margin: 24px auto;
                    display: block;
                    background: white;
                    font-size: 18px;
                    text-align: center;
                    color: var(--blue);
                    display: grid;
                    align-items: center;
                    justify-items: center;
                }


                button {
                    height: 40px;
                    border-radius: 30px;
                    font-size: 16px;
                    padding: 0 20px;
                    color: var(--blue);
                    display: block;
                    margin: auto;
                    background: white;
                }
            
            `}</style>
        </div>
    )
}

export default Entrada
