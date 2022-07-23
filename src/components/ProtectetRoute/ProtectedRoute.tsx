import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    const isLogedIn = false


    return (
      isLogedIn ? <Outlet/> : <Navigate to="login"/>
    )
}
