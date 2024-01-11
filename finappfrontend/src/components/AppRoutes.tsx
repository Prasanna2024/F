import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Admin from './Admin/Admin'
import Notification from './Notification/Notification'
import Billing from './Billing'
import Login from './Auth/Login'
import Database from './Database'
import NotifySpace from './Notification/NotifySpace'

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />}/>
                <Route path='/notification' element={<Notification/>}/>
                <Route path='/notification/:id' element={<NotifySpace />}/>
                <Route path='/billing' element={<Billing />}/>
                <Route path='/database' element={<Database />}/>
                <Route path='/auth' element={<Login />}/>
            </Routes>
        </div>
    )
}

export default AppRoutes
