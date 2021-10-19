/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Styled from './Styled.js';
import { FiPhone } from "react-icons/fi";
import {AiOutlineMail, AiFillLinkedin, AiFillGithub, AiOutlineFundProjectionScreen} from 'react-icons/ai';
import { BiMinus, BiRocket } from 'react-icons/bi';
import { ImBook, ImBubbles3, ImList2 } from 'react-icons/im';
import { GoLocation } from 'react-icons/go';
import Debora from './img/eu.jpg';

export default () => {
  return (
    <>
      <Styled.Contaneir>
        <Styled.Pessoal>
          <Styled.Teste>
            <Styled.IMG src={Debora} alt="Auto descrição: Mulher, branca, olhos verdes, loira, cabelos compridos e com franja" />
          </Styled.Teste>
          <Styled.Div>
            <Styled.H1> Debora Lara </Styled.H1>
            <Styled.P marginTop> Desenvolvedora Front End </Styled.P>
          </Styled.Div>

          <Styled.Perfil borderLeftStyle> Perfil </Styled.Perfil>
          <Styled.P marginLeft fontSize>Desenvolvedora Front End, Angular, Angular Material, Bootstrap, React, JavaScript, Typescript, HTML, CSS. </Styled.P>

          <Styled.Perfil borderLeftStyle > Contato </Styled.Perfil>
          <Styled.P marginLeft fontSize marginBottom><FiPhone  /> 41 998605554 </Styled.P> 
          <Styled.P  fontSize marginBottom padding><AiOutlineMail /> debora.roldanlara@gmail.com </Styled.P> 
          <Styled.P marginLeft fontSize marginBottom><AiFillLinkedin /><a href='https://www.linkedin.com/in/deboralara/' target="_blank" rel="noreferrer">www.linkedin.com/in/deboralara</a>  </Styled.P> 
          <Styled.P marginLeft fontSize marginBottom>< AiFillGithub /><a href='https://github.com/deboralara1' target="_blank" rel="noreferrer"> Github: https://github.com/deboralara1 </a></Styled.P>
          <Styled.P marginLeft fontSize marginBotto>< AiOutlineFundProjectionScreen /><a href='https://deboralara1.github.io/Portfolio' target="_blank" rel="noreferrer">Portfolio: https://deboralara1.github.io/Portfolio</a></Styled.P>
          <Styled.P fontSize padding>< GoLocation /> Colombo - PR </Styled.P>

          <Styled.Perfil borderLeftStyle > Qualificações e Competências </Styled.Perfil>
          
            <Styled.DivCompetencias>
              ReactJs 
              <Styled.Input background="linear-gradient(to right, #bebaba 70%, #ffffff 30%)"/>
            </Styled.DivCompetencias>
            
          <Styled.DivCompetencias> Styled Components <Styled.Input background="linear-gradient(to right, #bebaba 75%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> Testes Unitários <Styled.Input background="linear-gradient(to right, #bebaba 70%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> Angular <Styled.Input background="linear-gradient(to right, #bebaba 80%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> Angular Material <Styled.Input background="linear-gradient(to right, #bebaba 80%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> JavaScript | TypeScript <Styled.Input background="linear-gradient(to right, #bebaba 85%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> JQuery <Styled.Input background="linear-gradient(to right, #bebaba 40%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> CSS <Styled.Input background="linear-gradient(to right, #bebaba 85%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> Bootstrap <Styled.Input background="linear-gradient(to right, #bebaba 90%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> API <Styled.Input background="linear-gradient(to right, #bebaba 80%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> REST <Styled.Input background="linear-gradient(to right, #bebaba 80%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> Figma <Styled.Input background="linear-gradient(to right, #bebaba 60%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> Design (Adobe XD) básico <Styled.Input background="linear-gradient(to right, #bebaba 30%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> HTML <Styled.Input background="linear-gradient(to right, #bebaba 90%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> Domínio de Lógica de Lirogramação <Styled.Input background="linear-gradient(to right, #bebaba 90%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias> Git, GitHub, Gerrit, Jira, Kanban, Trello <Styled.Input background="linear-gradient(to right, #bebaba 80%, #ffffff 30%)"/></Styled.DivCompetencias>
          <Styled.DivCompetencias marginBottom> Windows e Linux intermediário <Styled.Input background="linear-gradient(to right, #bebaba 70%, #ffffff 30%)"/></Styled.DivCompetencias>

        </Styled.Pessoal>

        <Styled.Section>
          <Styled.Main>
            <Styled.Perfil><BiRocket /> Experiencias Profissionais </Styled.Perfil>
            <Styled.H6 borderLeftStyle> ESTÁGIO DE DESENVOLVEDORA FRONT-END REACT| ZUP INNOVATION | 04/2021 </Styled.H6>
            <Styled.P marginLeft paddingLeft fontSize><BiMinus  /> Atuei em uma trilha de conhecimento em que consistia estudar e aplicar as principais tecnologias utilizadas nos projetos da empresa, para mensuração do conhecimento e preparação para atuação em projetos da empresa. </Styled.P> 
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Atuo no desenvolvimento de projetos desenvolvendo aplicações para realizar testes em novos produtos da empresa, atuando no Front-End utilizando HTML, CSS, React, Styled Components, JavaScript,Testes Unitários, TypeScript e trabalhando constantemente com integrações à APIs com REST. </Styled.P> 
            <Styled.H6 borderLeftStyle> ESTÁGIO DE DESENVOLVEDORA FRONT-END ANGULAR | ALTA RAIL TECHNOLOGY – ART | 03/2020 À 12/2020 </Styled.H6>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Atuei no desenvolvimento de sistemas próprios da empresa que permitem o gerenciamento das linhas rodoferroviárias, atuando no Front-End dos sistemas utilizando HTML, CSS, Angular, TypeScript e trabalhando constantemente com integrações à APIs com REST. </Styled.P> 

            <Styled.Perfil><ImBubbles3 /> Idiomas </Styled.Perfil>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Espanhol = Nativo </Styled.P>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Português: Fluente </Styled.P>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Inglês: básico </Styled.P>

            <Styled.Perfil><ImBook /> Educação </Styled.Perfil>
            <Styled.H6 borderLeftStyle> ENSINO SUPERIOR | 07/2019 A 12/ 2021 | CENTRO UNIVERSITÁRIO DE MARINGÁ - UNICESUMAR </Styled.H6>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Tecnólogo em Análise e Desenvolvimento de Sistemas. </Styled.P>

            
            <Styled.Perfil><ImList2 /> Resumo de Qualificações </Styled.Perfil>
            <Styled.H6 borderLeftStyle> DO ZERO AO UM | PROJETO MAITHA TECH </Styled.H6>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> ReactJS </Styled.P> 
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> TypeScript </Styled.P> 

            <Styled.H6 borderLeftStyle> REACTJS NINJA | UDEMY </Styled.H6>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> 5 meses </Styled.P> 
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Projeto de mentoria no Front End (Html, CSS, Javascript e React) </Styled.P> 
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Rest </Styled.P> 

            <Styled.H6 borderLeftStyle> ANGULAR & TYPESCRIPT | LOIANE </Styled.H6>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Angular </Styled.P> 
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> TypeScript </Styled.P> 

            <Styled.H6 borderLeftStyle> WEB-DESING & RONT-END| ORIGAMID </Styled.H6>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> HTML, CSS </Styled.P> 
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> JavaScript, JQuery </Styled.P> 
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Design (Adobe XD) </Styled.P> 

            <Styled.H6 borderLeftStyle> CURSO EM VÍDEO | YOUTUBE </Styled.H6>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Lógica de programação </Styled.P> 
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> JavaScript </Styled.P> 

            <Styled.H6 borderLeftStyle> GIT E GITHUB | UDEMY </Styled.H6>
            <Styled.P marginLeft fontSize paddingLeft><BiMinus  /> Git e Github para iniciantes </Styled.P> 






          </Styled.Main>
        </Styled.Section>

      </Styled.Contaneir>

        
        
    </>
  );
}
