import styled from 'styled-components'

export default styled.div`
  width: 100vw;
  height: ${props => props.height};
  background-color: #efefef;
  height: 200px;
  box-shadow: 
    inset 0px 15px 20px -14px #323232,
    inset 0px -15px 20px -14px #323232;
  transform: skewY(-4deg);
  display: flex;
  align-items: center;
  margin-top: 1em;
  padding: 1.5em 0;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  overflow: scroll;
  div{
    width: 6rem;
    margin: 0 2em;
  }
  img{
    filter: grayscale(100%);
  }
  img:hover{
    filter: grayscale(0%);
  }
`