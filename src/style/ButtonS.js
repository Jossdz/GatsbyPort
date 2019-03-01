import React from 'react'
import styled from 'styled-components'

const ButtonS = styled.button`
  display: flex;
  width: 15rem;
  height: 4rem;
  background-color: #3b3a55;
  border: none;
  color: #FFF;
  margin: 1.5rem 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgba(25, 17, 34, 0.2) 0px 10px 42px;
  /* -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
  transform: skewX(-15deg);
  &:hover{
    transform: scale(1.1) skewX(-10deg);
    transition: 0.2s linear all;
    }
  @media only screen and (max-width: 600px){
    width: 100%;
  }
` 

export default ButtonS