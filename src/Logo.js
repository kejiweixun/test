import React from 'react';
import styled from 'styled-components';
import figmaLogo from './figma.svg';


const LogoStyled = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 4rem;
width: 15rem;
padding: 0 1rem;
border-radius: 1rem;
:hover {
  background: #000000;
}
>img {
  height: 2rem;
  display: block;
}
>p {
  font-size: 1.5rem;
  color: white;
}
`

function Logo(props){
  return (
<LogoStyled onClick={props.onClick}>
    <img src={figmaLogo} alt='figma logo'/>
     <p>Figma Plugins</p>
    </LogoStyled>




  )
}


export default Logo;