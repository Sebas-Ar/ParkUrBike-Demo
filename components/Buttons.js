import React from 'react'

const Buttons = ({text, height, toogleProfile}) => {
    return (
        <button onClick={() => toogleProfile()}>
            {text}
            <style jsx>{`
            
                button {
                    width: 257px;
                    height: ${height}px;
                    border: none;
                    border-radius: 30px;
                    margin: 24px auto;
                    display: block;
                    background: white;
                    font-size: 16px;
                }
            
            `}</style>
        </button>
    )
}

export default Buttons
