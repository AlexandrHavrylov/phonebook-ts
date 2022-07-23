import React from 'react'
import { StyledLink, UnlogedBarWrapper } from './NavBar.styled'

export default function UnlogedBar() {
    return (
         <UnlogedBarWrapper>
            
            <StyledLink to={"/login"}>Login</StyledLink>
            <StyledLink to={"/reg"}>Register</StyledLink>
                
            </UnlogedBarWrapper>
    )
}
