import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Card = styled.article`
  width: 49%;
  height: 13rem;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: rgba(25, 17, 34, 0.1) 0px 3px 10px;
  -moz-box-shadow: rgba(25, 17, 34, 0.1) 0px 3px 10px;
  box-shadow: rgba(25, 17, 34, 0.1) 0px 3px 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transition: 0.4s ease all;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 2rem;
  /* transform: skewY(-1deg); */
  background: linear-gradient(to bottom, rgba(59,58,85,1) 19%, rgba(35,35,35,1) 100%);
  a{
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  &:hover{
    transform: translateY(-4px);
    box-shadow: rgba(25, 17, 34, 0.2) 0px 10px 42px;
  }
  @media only screen and (max-width: 600px) {
		width: 100%;
	}
`

const Title = styled.div`
  height: 36%;
  padding: 0 0.5rem;
  margin: 0;
  background-color: white;
  display: flex;
  align-items: flex-start;
  h2{
    color: rgba(59,58,85,1);
    margin-bottom: 0;
    padding: 0.5rem;
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 600px) {
		h2{
      font-size: 1.48rem;
      color: rgba(59,58,85,1);
      margin-bottom: 0;
      padding: 0.5rem;
    }
	}
`
const Excerpt = styled.div`
  height: 48%;
  padding: 1rem ;
  margin: 0;
  color: whitesmoke;
  -webkit-clip-path: polygon(0 8%, 150% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 8%, 150% 0, 100% 100%, 0% 100%);
  font-size: 0.9rem;
  @media only screen and (max-width: 600px) {
    padding: 0.8rem ;
    p{
      font-size: 0.7rem;
    }
  }
`

const Tags = styled.div`
  height: 16%;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: whitesmoke;
`

const Tag = styled.div`
  display:flex;
  flex-direction: row;
  height:100%;
  width: ${props => 100 / props.length}%;
  padding: 0;
  justify-content: center;
  opacity: 0.85;
  small{
    background-color: ${props => technology(props.tech)};
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    font-weight: 550;
  }
`

function technology(tech){
  return  (tech === 'gatsby')   ? '#663399' :
          (tech === 'js')       ? '#f0db4f' : 
          (tech === 'graphql')  ? '#E10098' : 
          (tech === 'mongodb')  ? '#13aa52' :
          (tech === 'prisma')   ? '#3d5866' :
          (tech === 'apollo')   ? '#280B9F' :
          (tech === 'testing')  ? '#e6192c' :
          (tech === 'nodejs')   ? '#006F01' :
          (tech === 'eslint')   ? '#463FD4' :
          (tech === 'css')      ? '#136EB0' :
          (tech === 'html')     ? '#D74C1C' :
          (tech === 'react' || tech === 'jsx')    ? '#61dafb' : '#232323';
}

export default ({title, excerpt, tags, href}) => 
<Card>
  <Link to={href}>
  <Title>
    <Link to={href}><h2>{title}</h2></Link>
  </Title>
  <Excerpt>
    <p>{excerpt}</p>
  </Excerpt>
  {tags && <Tags>{tags.map((tag, i) => 
      <Tag tech={tag} length={tags.length}>
        <small key={i}>#{tag}</small>
      </Tag>
    )}</Tags>}
  </Link>
</Card>
