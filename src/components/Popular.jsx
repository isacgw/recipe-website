import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom';

const Popular = () => {

    const [popularFood, setPopularFood] = useState([]);

    useEffect(() => {
        getPopular();
    },[])

const getPopular = async () => {


    const check = localStorage.getItem('popular');

    if (check){
        setPopularFood(JSON.parse(check));
    }
    else {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json();

    localStorage.setItem('popular', JSON.stringify(data.recipes));
    setPopularFood(data.recipes);
    console.log(data.recipes)
    }

}

  return (
    <div>
        <Wrapper>
        <h3 className='title red'>Popular Food</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '2rem',
                }}>
                    {popularFood.map((recipe) =>{
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/'+ recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient/>
                                </Link>
                            </Card>
                            </SplideSlide>
                        )
                    })};
                </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
    /* background: green;
    display: flex;
    flex-direction: column;
    justify-content: space-around; */
`;

const Card = styled.div`
    min-height: 18rem;
    border-radius: 3rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        color: #fff;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular;