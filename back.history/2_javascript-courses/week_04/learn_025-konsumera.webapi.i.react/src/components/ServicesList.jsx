import React, {useState, useEffect} from 'react'
import ServiceItem from './ServiceItem'
import FuskWebAPI from "./FuskWebAPI.json"
import axios from "axios"

// Ta emot data

const ServicesList = () => {

    const [serviceItems, setServiceItems] = useState([])

    const getDataUsingFetch = async () => {
        // const res = await fetch("https://onatrix-api.azurewebsites.net/api/services")
        const res = await fetch(FuskWebAPI)
        const data = await res.json()
        setServiceItems(data)
    }
    const getDataUsingFetchShort = async () => {
        // const res = await fetch("https://onatrix-api.azurewebsites.net/api/services")
        const res = await fetch(FuskWebAPI)
        setServiceItems(await res.json())
    }

    const getDataUsingAxios = async () => {
        const res = await axios.get("https://onatrix-api.azurewebsites.net/api/services")
        setServiceItems(res.data)
    }
    
    useEffect(() => {

        getDataUsingFetch()
        getDataUsingAxios()

    }, [])



  return (
    <div className="services">
        {
            serviceItems.map(item => (<ServiceItem key={item.id} service={item} />))
        }
    </div>
  )
}

export default ServicesList