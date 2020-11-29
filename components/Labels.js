import React from 'react'

const Labels = ({img, name, value}) => {
    return (
        <div className="container">
            <img src={img}/>
            <p>{name}:</p>
            <span>{value}</span>
            <style jsx>{`
            
                .container {
                    width: 257px;
                    height: 47px;
                    border: none;
                    border-radius: 30px;
                    margin: 24px auto;
                    display: block;
                    background: white;
                    font-size: 16px;
                    display: grid;
                    grid-template-columns: 40px auto;
                    grid-template-rows: 1fr 1fr;
                    grid-row-gap: 4px;
                }

                img {
                    grid-row: 1/3;
                    align-self: center;
                    justify-self: center;
                }

                p {
                    align-self: flex-end;
                }

                span {
                    color: var(--gray)
                }
            
            `}</style>
        </div>
    )
}

export default Labels
