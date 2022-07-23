import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { logInUser } from '../../redux/auth/auth-action'

export default function LoginForm() {

    const dispatch = useAppDispatch()
    const [user, setUser] = useState({ email: "", password: "" })

    const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value, name } = e.currentTarget
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }))
      
    }

    const onLoginClick = (e : React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        dispatch(logInUser(user))
    }


    return (
        <form >
            <label > Email <input onChange={onInputChange} type="text" name="email" value={user.email} /></label>
            <label> Password <input onChange={onInputChange} type="password" name="password" value={user.password} /></label>

            <button onClick={onLoginClick} type="submit"> Login</button>
      </form>
    )
}
    