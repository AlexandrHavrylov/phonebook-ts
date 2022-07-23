import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import { useAppSelector } from '../hooks/hooks'


export default function RegisterPage() {
    const isRegistred = useAppSelector(state => state.auth.isRegisred)
    const navigate = useNavigate()
    
    useEffect(() => {
   isRegistred && navigate("/login")
    }, [isRegistred, navigate])

    return (
        <>
            <RegisterForm />
        </>
    )
}
