import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'

export default function ProtectedRoute() {
    const isLoggedIn = useAppSelector(state => state.auth.isLogedIn)


    return (
      isLoggedIn ? <Outlet/> : <Navigate to="login"/>
    )
}
