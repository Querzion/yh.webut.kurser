import React, {useState, useEffect} from 'react'
import ServiceItem from './ServiceItem'
import { FuskWebAPI } from "./FuskWebAPI"

const ServicesList = () => {

    const [serviceItems, setServiceItems] = useState([])

    const fetchData = async () => {
        // const res = await fetch("https://onatrix-api.azurewebsites.net/api/services")
        const res = await fetch("./FuskWebAPI.json")
        const data = await res.json()
        setServiceItems(data)
    }
    
    useEffect(() => {

        fetchData()

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