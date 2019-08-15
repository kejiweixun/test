import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import SecondPage from './SecondPage'


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
`


function HeaderAndMain() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

// const ModalStyled = styled.div`
// z-index: 1;
// width: 100%;
// height: 100%;
// background: rgba(0, 0, 0, 0.5);

// >div{
  
//   width: 25%;
//   height: 60%;
//   padding: 2rem;
//   background: white;
//   position: fixed;

//   box-shadow: 0px 0px 100px 1px rgba(200, 200, 200, 0.7);
// }
// >div form p {
//   font-size: 2rem;
//   text-align: center;
// }
// >div form button {
//   border: 1px solid #585858;
//   width: 90%;
//   height: 15%;
//   font-size: 2rem;
//   color: #585858;
// }
// >div form input {
//   border: 1px solid #585858;
//   width: 90%;
//   height: 15%;
//   font-size: 2rem;
//   color: #585858;
// }
// `

// function Modal(props) {
//   return (
//     <ModalStyled>
//       <div>
//         <form>
//           <p>Log in or create an account to install SkewDat</p>
//           <button>Sign up with Google</button>
//           <p>or</p>
//           <input type='email' placeholder='Email' />
//           <input type='password' placeholder='Password' />
//         </form>
//       </div>
//     </ModalStyled>
//   )
// };


function App() {
  const [path, setPath] = useState('/p');
  console.log('before clidk: ', path)
  function handleClick() {
    path === '/p' ? setPath('/') : setPath('/p')
  }

  console.log('after clidk: ', path)
  return (
    <>
      <Router basename='/1st-learning-project'>
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
        </Switch>

      </Router>
    </>

  );
}

export default App;
