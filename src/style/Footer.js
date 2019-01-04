import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = styled.footer`
  -webkit-clip-path: polygon(0 23%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(0 23%, 100% 0%, 100% 100%, 0% 100%);
  width: 100vw;
  height: 12vh;
  background-color: #3B3A55;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
  p{
    color: whitesmoke;
    padding-top: 1.5em;
  }
`
export default () => <Footer>
  <p>Con {'{ '}...<FontAwesomeIcon icon={faHeart}/>{' }'} por Jossdz</p>
</Footer>