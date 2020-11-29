import React, { useEffect, useState } from 'react'
import Entrada from '../components/Entrada'
import Hero from '../components/Hero'
import LabelsList from '../components/LabelsList'
import Layout from '../components/layout'
import axios from 'axios'

const biciparqueadero = () => {

    const [entrada, setEntrada] = useState(false)
    const [code, setCode] = useState(0);
    const [racks, setRacks] = useState({})
    const [state, setState] = useState(false)

    useEffect(() => {
        getRacks()
        getState()
    }, [])

    const getRacks = async () => {
        const url = '/api/biciparqueadero'
        const response = await axios.post(url, {park_id: "5fbf1ebc1643091d2a9f6e21"})
        
        setRacks({
            freeRacks: response.data.message.freeRacks,
            totalRacks: response.data.message.totalRacks
        })

    }

    const getState = async () => {
        const url = '/api/biciusuario'
        const response = await axios.post(url, {user_id: "5fbf2b7d53974221b47f8cc7"})
        
        setState( response.data.user.on_park )
        console.log(response.data.user.on_park)
    }

    const onSubmit = async (e) => {

        e.preventDefault()
        
        let newCode = Math.round(Math.random()*999999) + ''
        while(newCode.length < 6) {
            newCode += 0
        } 

        newCode = parseInt(newCode)

        setCode(newCode)

        const url = '/api/biciusuario'
        const response = await axios.post(url, {
            code: newCode,
            user_id: "5fbf2b7d53974221b47f8cc7"
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
        <Layout urlImg="/img/map.jpg">
            <Hero toogleEntrada={toogleEntrada} entrada={entrada} state={state}>
                {
                    entrada
                    ?
                    <Entrada onSubmit={onSubmit} code={code} state={state}/>
                    :
                    <LabelsList racks={racks}/>

                }
            </Hero>
        </Layout>
    )
}

export default biciparqueadero
