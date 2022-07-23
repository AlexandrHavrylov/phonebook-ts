import React from 'react'
import { StyledLink, UnlogedBarWrapper } from './NavBar.styled'

export default function UnlogedBar() {
    return (
         <UnlogedBarWrapper>
            
            <StyledLink to={"/login"}>Войти</StyledLink>
            <StyledLink to={"/reg"}>Зарегистрироваться</StyledLink>
                
            </UnlogedBarWrapper>
    )
}
