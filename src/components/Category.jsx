import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks, GiMeat} from 'react-icons/gi'
import {IoIosIceCream} from 'react-icons/io'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import React from 'react'

const Category = () => {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai food</h4>
        </SLink>
        <SLink to={'/cuisine/Chinese'}>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </SLink>
        <SLink to={'/cuisine/Nordic'}>
            <GiMeat/>
            <h4>Nordic</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: #fff;
        font-size: 0.8rem;
    }

    svg {
        color: #fff;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: #fff;
        }

        h4 {
        color: #fff;
    }
    }

    `

export default Category