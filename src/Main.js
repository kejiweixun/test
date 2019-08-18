import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Banner from './Banner';
import Article from './Article'

const MainStyled = styled.main`
max-width: 110rem;
margin: 0 auto;
>div{
  display: flex;
  justify-content: space-between;
}
`

function Main(props){
  return (
    <MainStyled>
      <Banner />
      <div>
      <Article />
      <Sidebar/>
      </div>
    </MainStyled>
  )
}

export default Main;