import React from "react";
import {useParams} from 'react-router-dom'
import servicesData from '../servicesData'

export default function ServiceInfo() {
    const {id} = useParams()
    const service = servicesData.find(service => {
        return service._id == id
    })
    return(
        <div className="servicedetails">
            <h2>{service.name}</h2>
            <h3>{service.description}</h3>
            <p>Price: {service.price}</p>
        </div>
    )
}