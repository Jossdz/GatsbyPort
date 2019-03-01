import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: ${props => props.height}rem;
  background-color: #efefef;
  height: 200px;
  box-shadow: 
    inset 0px 15px 20px -14px #323232,
    inset 0px -15px 20px -14px #323232;
  transform: skewY(-2.2deg);
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  margin-top: 1em;
  padding: 1.5em 0;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  div{
    margin: 0 2em;
    width: 6rem;
    height: 100%;
    display:flex;
    align-items: center;
  }
  img{
    filter: grayscale(100%);
    width: 100%;
    margin: 0;
  }
  img:hover{
    filter: grayscale(0%);
  }
`