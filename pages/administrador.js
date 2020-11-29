import React, { useEffect, useState } from 'react'
import AdminRegister from '../components/AdminRegister'
import Layout from '../components/layout'
import Title from '../components/Title'
import UserProfile from '../components/UserProfile'
import axios from 'axios'

const administrador = () => {

    const [profile, setProfile] = useState(false)
    const [code, setCode] = useState('')
    const [racks, setRacks] = useState({})
    const [info, setInfo] = useState({});


    useEffect(() => {
        getRacks()
    }, [])

    const getRacks = async () => {
        const url = '/api/biciparqueadero'
        const response = await axios.post(url, {park_id: "5fbf1ebc1643091d2a9f6e21"})
        
        setRacks({
            freeRacks: response.data.message.freeRacks,
            totalRacks: response.data.message.totalRacks
        })

    }

    const toogleProfile = () => {
        setProfile(!profile)
        setInfo({})
        setCode('')
    }

    const readCode = (e) => {
        setCode(isNaN(parseInt(e.target.value)) ? '' : parseInt(e.target.value))
    }

    const onSubmitIngreso = async () => {

        const data = {
            codigo_entrad: code,
            park_id: "5fbf1ebc1643091d2a9f6e21",
            state: "entrada"
        }
        const url = '/api/registro'
        const response = await axios.post(url, data)
        setRacks(Object.assign({}, racks, {freeRacks: response.data.rack}))
        setInfo(Object.assign({}, info, {value: response.data.rackAssing, text: '#RACK'}))
        
    }
    
    const onSubmitSalida = async () => {
        
        const data = {
            "codigo_salida": code,
            "park_id": "5fbf1ebc1643091d2a9f6e21",
            "state": "salida"
        }
        const url = '/api/registro'
        const response = await axios.post(url, data)
        setRacks(Object.assign({}, racks, {freeRacks: response.data.rack}))
        setInfo(Object.assign({}, info, {value: response.data.price, text: 'PRECIO'}))

    }

    return (
        <Layout toogleProfile={toogleProfile} urlImg="/img/park.png">
            <Title />
            {
                profile
                ?
                <AdminRegister 
                    info={info}
                    racks={racks}
                    readCode={readCode} 
                    code={code} 
                    onSubmitIngreso={onSubmitIngreso} 
                    onSubmitSalida={onSubmitSalida}
                />
                :
                <UserProfile toogleProfile={toogleProfile}/>

            }
        </Layout>
    )
}

export default administrador
