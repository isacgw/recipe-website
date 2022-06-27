import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    }


  return (
    <FormStyle onSubmit={handleSubmit}>
        <h2>What do you want to eat today?</h2>
        <div>
            <FaSearch/>
        <input onChange={(e) => setInput(e.target.value)} 
            type="text" 
            value={input} />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;

    h2 {
        text-align: center;
        font-family: 'Pacifico', cursive;
        font-size: 1.5rem;

        margin-bottom: 1rem;
    }

    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #a5a5a5, #8e8787);
        font-size: 1.5rem;
        color: #fff;
        padding: 1.2rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        font-size: .9rem;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`

export default Search