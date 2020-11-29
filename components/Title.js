import React from 'react'

const Title = () => {
    return (
        <div className="container">
            <h1>BICIPARQUEADERO USTA</h1>
            <style jsx>{`
            
            .container{
                position: relative;
                top: 0px;
                margin: auto;
                width: 286px;
                height: 57px;
                background: var(--blue); 0% 0% no-repeat padding-box;
                box-shadow: 0px 3px 6px #00000029;
                border-radius: 0px 0px 40px 40px;
                opacity: 1;
                backdrop-filter: blur(undefined);
                -webkit-backdrop-filter: blur(undefined);
                display: grid;
            }
            .container h1{
                margin: auto;
                width: 224px;
                height: 27px;
                text-align: center;
                font: normal normal normal 20px/27px Segoe UI;
                font-weight: 400;
                letter-spacing: 0px;
                color: #FFFFFF;
                text-transform: uppercase;
                opacity: 1;
            }
            
            `}</style>

            
        </div>
    )
}

export default Title
