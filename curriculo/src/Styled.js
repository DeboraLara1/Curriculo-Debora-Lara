/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';

const Contaneir = styled.div`
    
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  @media screen and (max-width:1200px) {
  
    grid-template-columns: repeat(1, 1fr);
  }
`
const Pessoal = styled.div`
  grid-column: span 2;
  height: 100%;
  color: #ffffff;
  background-color: #006a7a;
  a {
    color: #ffffff;
    text-decoration: none;
    padding: 2%;
  }
  @media screen and (max-width:780px) {
    grid-column: span 3;
  
  }
`

const Section = styled.div`
  grid-column: span 5;
  background-color: #f1f1f1;
  height: 100%;
  @media screen and (max-width:780px) {
    grid-column: span 4;
  }
`

const Main = styled.div`
  color: #006a7a;
  padding: 2rem 3rem;
  padding-bottom: 2rem;
`

const Teste =styled.div`
  margin-top: 15px;
  align-items: center;
  justify-content: space-around;
  display: flex;
`

const IMG = styled.img`
  width: 136px;
  height: 156px;
  border-radius: 50%;
`

const H1 = styled.h1`
  margin-bottom: 1px;
`

const P = styled.p`
  margin-top: ${props => props.marginTop ? "1px" : "0px"};
  margin-left: ${props => props.marginLeft ? "20px" : "12px"};
  font-size: ${props => props.fontSize ? "13.3px;" : "15px"};
  margin-bottom: ${props => props.marginBottom ? "8x;" : "0px"}; 
  padding: ${props => props.padding ? "2%;" : "0px"};
  padding-left: ${props => props.paddingLeft ? "2%;" : "9p"};
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DivCompetencias = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: ${props => props.marginBottom ? "5%;" : "1px"};
  font-size: 14px;
`

const Li = styled.li`
  font-size: 14px;
  margin-left: 8%;
  margin-top: 2px;
`

const DivLinea = styled.div`
  display: flex;
  position: absolute;
  border-top:solid 2px;
  width: ${props => props.width};
  top: ${props => props.top};
  left: ${props => props.left};
`

const Perfil = styled.h3`
  margin-left: 4%;  
  border-left-style: ${props => props.borderLeftStyle ? 'solid' : ''};
  border-left-width: medium;
  padding-left: 3px;
`

const H6 = styled.h6`
  margin-left: 4%;  
  border-left-style: ${props => props.borderLeftStyle ? 'solid' : ''};
  border-left-width: medium;
  padding-left: 3px;
`

const Input = styled.input`
  background:${props => props.background};
  border-radius: 50px;
  border: none;
  height: 7px;
`

export default{
  Contaneir,
  Teste,
  IMG,
  Pessoal,
  H1,
  P,
  Li,
  Div,
  DivCompetencias,
  DivLinea,
  Perfil,
  H6,
  Section,
  Main,
  Input
}