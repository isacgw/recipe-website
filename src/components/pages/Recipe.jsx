import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Recipe = () => {

let params = useParams();
const [details, setDetails] = useState({});
const [activeTab, setActiveTab] = useState("instructions")

const fetchDetails = async () => {
  const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
  const detailData = await data.json();
  setDetails(detailData);
  console.log(detailData);
};

useEffect(()=> {
  fetchDetails();
},[params.name]);

  return (
    <DetailWrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt={details.title} />
          {/* <p dangerouslySetInnerHTML={{ __html: details.summary }}></p> */}
        </div>

        <Info>
          <div>
          <Button className={activeTab === 'instructions' ? 'active' : ''} 
            onClick={() => setActiveTab('instructions')}>Instructions</Button>
          
          <Button className={activeTab === 'ingredients' ? 'active' : ''} 
            onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
            </div>

            { activeTab === 'instructions' && <div>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div> }

            { activeTab === 'ingredients' && <ul>{details.extendedIngredients.map((ingredient) => 
              <li key={ingredient.id}>
                {ingredient.original}
              </li>
            )}</ul>}
        </Info>
        </DetailWrapper>
  )
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

    h2 {
      margin-bottom: 2rem;
    }

    li {
      font-size: .8rem;
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }

    ul {
      margin-top: 2rem;
    }

    p {
      font-size: .8rem;
      line-height: 1.5rem;
    }
`

const Button = styled.button`
  padding: 1rem .6rem;
  margin-bottom: 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid black;
    margin-right: 1rem;
    font-weight: 600;
    cursor: pointer;
    font-size: .8rem;
    border-radius: .5rem;
`

const Info = styled.div`

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 2rem;
  
`

export default Recipe