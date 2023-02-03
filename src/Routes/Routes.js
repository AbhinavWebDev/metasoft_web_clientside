import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux";
import Login from '../Pages/Auth/LoginPage';
import Home from '../Pages/Home/Home'
import EnquiryForm from '../Pages/Enquiry/enquiryForm'

export const RouteManagement = () => {
    const user = useSelector((state) => state.authReducer.authData)
    return (
        <>
            <Routes>
            <Route path="/" element={ <EnquiryForm />} />
                <Route path="/admin" element={user ? <Home /> : <Login />} />
                <Route path="/home" element={user ? <Home /> : <Login />} />
                <Route path="/auth" element={user ? <Home /> : <Login />} />
            </Routes>
        </>
    )
}
