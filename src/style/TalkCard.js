import React from 'react'
import styled from 'styled-components'
import TextTruncate from 'react-text-truncate'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'


const Card = styled.article`
  width: 49%;
  height: 13rem;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: rgba(25, 17, 34, 0.1) 0px 3px 10px;
  -moz-box-shadow: rgba(25, 17, 34, 0.1) 0px 3px 10px;
  box-shadow: rgba(25, 17, 34, 0.1) 0px 3px 10px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 2rem;
  /* transform: skewY(-1deg); */
  background: white;
  a{
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  @media only screen and (max-width: 600px) {
		width: 100%;
	}
`

const Title = styled.div`
  width: 100%;
  background-color: #68537a;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    color: #DDD;
  }
`

const Details = styled.div`
  width: 100%;
  background-color: #d6d6d6;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  p{
    margin: 0;
  }
  @media only screen and (max-width: 600px) {
		p{
      font-size:0.8rem;
    }
    small{
      font-size: 0.7rem;
    }
	}
`

const Button = styled.div`
  width: 100%;
  background-color: #3b3a55;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items:center;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #ddd;
    &:hover{
      text-decoration: none;
      color: #FFF;
    }
  }
`
const Abstract = styled.div`
  width: 100%;
  height: 55%;
  padding: 1rem;
  p{
    margin: 0%;
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 600px) {
    p{
    margin: 0%;
    font-size: 0.7rem;
  }
  }
`


export default ({
    place,
    date,
    title,
    abstract,
    slides,
    tags
  }) => 
  <Card>
    <Title>
      <TextTruncate
      line={2}
      truncateText="…"
      text={title}
    />
    </Title>
    <Details>
      <p><FontAwesomeIcon icon={faMapPin}/> {place}</p>
      <small>{date}</small>
    </Details>
    <Abstract>
      <p>
        <TextTruncate
          line={4}
          truncateText="…"
          text={abstract}
        />
      </p>
    </Abstract>
    <Button>
      <a href={slides} target="_blank" >
        Slides
      </a>
    </Button>
  </Card>