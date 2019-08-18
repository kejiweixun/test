import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import SecondPage from './SecondPage';
import Drawer from './Drawer';
import FooterLogo from './FooterLogo'
import footer_logo from './footer_logo.png'
import footer_logo_grey from './footer_logo_grey.png'


import Logo from './Logo';
import Button from './Button';
import styled from 'styled-components';
import ALink from './Link';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const NavStyled = styled.div`
display: flex;
align-items: center;
background: #212121;
padding: 0 4rem;
height: 5.5rem;
position: sticky;
top: 0;
@media(max-width: 644px){
  display: none;
}
`


function HeaderAndMain() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}


const DrawerNavStyled = styled.div`
background: #2C2C2C;
display: flex;
align-items: center;
height: 4rem;
>div {
    flex: 1
}
.drawer-nav-button {
    background: transparent;
    color: white;
    border: none;
    font-size: 1.5rem;
    outline: none;
    text-align: center;
}

@media(min-width: 645px){
    display: none;
}
`

const DrawerButtonStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 1.3rem;
position: fixed;
top: 1.3rem;
left: 1rem;

    >div{
        width: 1.3rem;
        border: 0.5px solid rgba(255,255,255,0.7);
    }
@media(min-width: 645px){
    display: none;
}
`
function App() {
  const [path, setPath] = useState('/p')
  const [drawerOpen, setDrawerOpen] = useState(false);
  console.log(drawerOpen)
  function handleClick() {
    path === '/p' ? setPath('/') : setPath('/p')
  }




  const drawer = drawerOpen ? <Drawer click={()=>setDrawerOpen(false)} /> : null;

  return (
    <>
      {drawer}
      <Router basename='/1st-learning-project'>


        <DrawerButtonStyled onClick={()=>{setDrawerOpen(true)}}>
          <div></div>
          <div></div>
          <div></div>
        </DrawerButtonStyled>

        <DrawerNavStyled>
          <div />
          <Link to={path} style={{ textDecoration: 'none' }}>
            <button className='drawer-nav-button' onClick={handleClick} >Figma Plugins</button>
          </Link>
          <div />
        </DrawerNavStyled>


        <NavStyled>
          <Link to={path} style={{ textDecoration: 'none' }}>
            <Logo onClick={handleClick} />
          </Link>
          <div style={{ flex: 1, textAlign: 'right' }}>
            <ALink content='Figma.com' link='https://www.figma.com/' color='#6A6A6A' hoverColor='white' />
          </div>
          <Button content='Log in' color='#6D6D6D' hoverColor='white' />
          <Button content='Sign up' color='white' hoverColor='white' />
        </NavStyled>

        <Switch>
          <Route exact path='/' component={HeaderAndMain} />
          <Route path='/p' component={SecondPage} />
          <Route path='/index.html' component={HeaderAndMain} />
        </Switch>
        <FooterLogo footer_logo={footer_logo}/>
<FooterLogo media='max-width: 644px' footer_logo={footer_logo_grey} />
      </Router>
    </>

  );
}

export default App;
