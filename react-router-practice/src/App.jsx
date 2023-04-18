import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Services from './components/Services'
import Home from './components/Home'
import ServiceInfo from './components/ServiceInfo'

export default function App() {
    return (
        <div>
            <div className='header'>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/services'>Services</Link>
                </div>
                <h1>My Services</h1>
            </div>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/services/:id' element={<ServiceInfo />} />
                </Routes> 
            </div>
        </div>
    )
}