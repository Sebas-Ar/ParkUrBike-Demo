import Axios from "axios"
import React, { useEffect, useState } from "react"
import Buttons from "./Buttons"

const UserProfile = ({ toogleProfile }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getReceives()
    }, [])

    const getReceives = async () => {
        const url = "/api/registro"
        const response = await Axios.get(url)
        console.log(response.data.data)
        setData(response.data.data)
    }

    const fromDate = (dateComplete) => {
        const date = new Date(dateComplete)

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const hour = date.getHours()
        const minute = date.getMinutes()

        return `${day}/${month}/${year} - ${hour}:${minute}`
    }

    const calculateMinutes = (date1, date2) => {
        const d1 = new Date(date1)
        const d2 = new Date(date2)

        const totalDate = d2 - d1
        const minutes = totalDate / 1000 / 60

        if (minutes < 1) {
            return 1
        } else {
            return Math.round(minutes)
        }
    }

    return (
        <div className="container">
            <div className="img"></div>
            <p className="title">RECIBOS</p>
            <ul className="wrapper-receives">
                {data.map((receive) => (
                    <li className="receive">
                        <ul>
                            <li>
                                <label>Parqueadero:</label>
                                <p>{receive.park_name}</p>
                            </li>
                            <li>
                                <label>Entrada:</label>
                                <p>{fromDate(receive.entrada)}</p>
                            </li>
                            <li>
                                <label>Salida:</label>
                                <p>{fromDate(receive.salida)}</p>
                            </li>
                            <li>
                                <label>Pago:</label>
                                <p>
                                    ${" "}
                                    {receive.price *
                                        calculateMinutes(
                                            receive.entrada,
                                            receive.salida
                                        )}
                                </p>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                .container {
                    position: relative;
                    top: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 315px;
                    height: 424px;
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
                    border: 3px solid #41aae3;
                }

                .title {
                    text-align: center;
                    padding-top: 85px;
                    color: white;
                    font-size: 22px;
                }

                .wrapper-receives {
                    padding-right: 15px;
                    margin: 10px 15px 10px 30px;
                    height: 270px;
                    overflow: auto;
                }

                .wrapper-receives::-webkit-scrollbar {
                    width: 7px;
                }

                .wrapper-receives::-webkit-scrollbar-thumb {
                    background-color: var(--gray);
                    border-radius: 5px;
                }

                .wrapper-receives::-webkit-scrollbar-track {
                    background-color: #3b3b3b22;
                    border-radius: 5px;
                }

                .receive {
                    background: white;
                    border-radius: 30px;
                    padding: 10px;
                    box-sizing: border-box;
                }

                li > ul > li {
                    margin: 15px 0;
                }

                li > p {
                    color: #707070;
                }
            `}</style>
        </div>
    )
}

export default UserProfile
