import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiChefToque } from 'react-icons/gi'

const Nav = () => {
  return (
    <NavWrapper>
        <Link to={'/'}>
        <GiChefToque/>
        </Link>
        <Logo to={'/'}>My Delicious Food</Logo>
    </NavWrapper>
  )
}

const NavWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .2rem;
    margin-top: 1rem;
    margin-bottom: 3rem;

    svg {
        font-size: 2rem;
        color: #333;
    }

`

const Logo = styled(Link)`
    text-decoration: none;
    font-size: .8rem;
    font-weight: 400;
    font-family: "Pacifico", cursive;
    color: #333;
`

export default Nav