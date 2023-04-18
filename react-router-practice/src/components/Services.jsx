import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import servicesData from '../servicesData'
import ServiceInfo from './ServiceInfo'

export default function Services() {
    const servicesElements = servicesData.map(service => {
        return (
            <div key={service._id} className='listedservice'>            
                <Link to={`${service._id}`}>
                    <h4>{service.name}: ${service.price}</h4>
                </Link>
            </div>
        )

    })
    return (
        <div className='servicespage'>
            <h2>Services:</h2>
            {servicesElements}
        </div>
    )
}