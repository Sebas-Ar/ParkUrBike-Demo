import React, { useEffect, useState } from "react"
import Entrada from "../components/Entrada"
import Hero from "../components/Hero"
import LabelsList from "../components/LabelsList"
import Layout from "../components/layout"
import axios from "axios"
import UserProfile from "../components/UserProfile"
import UserReceive from "../components/UserReceive"
import mqtt from "mqtt"

const biciparqueadero = () => {
    const [entrada, setEntrada] = useState(false)
    const [profile, setProfile] = useState(false)
    const [code, setCode] = useState(0)
    const [racks, setRacks] = useState({})
    const [state, setState] = useState(false)
    const [receive, setReceive] = useState(false)

    useEffect(() => {
        getRacks()
        getState()
    }, [])

    const options = {
        connectTimeout: 4000,
        clientId: "cliente" + new Date().getUTCMilliseconds(),
        keepalive: 60,
        clean: true,
    }

    useEffect(() => {
        const client = mqtt.connect("ws://54.158.172.112:8083/mqtt", options)

        client.on("connect", () => {
            client.subscribe("GPIO", function (err) {
                if (err) {
                    console.log("error al conectar al topic")
                }
            })
        })

        client.on("message", (topic, message) => {
            console.log(message.toString())
        })
    }, [])

    const toogleProfile = () => {
        setProfile(!profile)
        setCode("")
    }

    const toogleReceive = () => {
        setReceive(!receive)
    }

    const getRacks = async () => {
        const url = "/api/biciparqueadero"
        const response = await axios.post(url, {
            park_id: "5fbf1ebc1643091d2a9f6e21",
        })

        setRacks({
            freeRacks: response.data.message.freeRacks,
            totalRacks: response.data.message.totalRacks,
        })
    }

    const getState = async () => {
        const url = "/api/biciusuario"
        const response = await axios.post(url, {
            user_id: "5fbf2b7d53974221b47f8cc7",
        })

        setState(response.data.user.on_park)
        console.log(response.data.user.on_park)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        let newCode = Math.round(Math.random() * 999999) + ""
        while (newCode.length < 6) {
            newCode += 0
        }

        newCode = parseInt(newCode)

        setCode(newCode)

        const url = "/api/biciusuario"
        const response = await axios.post(url, {
            code: newCode,
            user_id: "5fbf2b7d53974221b47f8cc7",
        })

        console.log(response)
    }

    const toogleEntrada = () => {
        setCode(0)
        setEntrada(!entrada)
        getRacks()
        getState()
    }

    return (
        <Layout toogleProfile={toogleProfile} urlImg="/img/map.jpg">
            {profile ? (
                receive ? (
                    <UserReceive />
                ) : (
                    <UserProfile toogleProfile={toogleReceive} />
                )
            ) : (
                <Hero
                    toogleEntrada={toogleEntrada}
                    entrada={entrada}
                    state={state}
                >
                    {entrada ? (
                        <Entrada
                            onSubmit={onSubmit}
                            code={code}
                            state={state}
                        />
                    ) : (
                        <LabelsList racks={racks} />
                    )}
                </Hero>
            )}
        </Layout>
    )
}

export default biciparqueadero
