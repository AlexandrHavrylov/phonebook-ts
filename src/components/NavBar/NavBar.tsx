import React from 'react'
import { NavLink } from 'react-router-dom'
import { Naviagtion, StyledLink } from './NavBar.styled'
import UnlogedBar from './UnlogedBar'

export default function NavBar() {
    return (
        <Naviagtion>
    
            <StyledLink to={"/contacts"}> Phonebook</StyledLink>
           <UnlogedBar/>
      </Naviagtion>
    )
}
