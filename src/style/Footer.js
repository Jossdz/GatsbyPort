import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  -webkit-clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);
  width: 100vw;
  height: 12em;
  background-color: #3B3A55;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.5rem;
  text-align: center;
  p{
    color: whitesmoke;
    padding-top: 1.5em;
  }
  a>h3{
    margin: 0;
    font-size: 1.2rem;
    color: #dedede;
  }
`
const Links = styled.div`
  width: 100%;
  margin-top: 3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;
  img{
    width: 2em;
    margin:0;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 4rem;
  }
`

export default () => <Footer>
  <Links>
    <a href='https://medium.com/@jossdz' target="_blank"><img src='https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-medium-1.png&r=222&g=222&b=222'/></a>
    <a href='https://www.linkedin.com/in/jossdz/' target="_blank"><img src='https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-linkedin-1.png&r=222&g=222&b=222'/></a>
    <a href='https://github.com/Jossdz' target="_blank"><img src='https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-1.png&r=222&g=222&b=222'/></a>
  </Links>
  <a href="mailto:me@jossdz.com"><h3>me@jossdz.com</h3></a>
</Footer>