import React from 'react';
import styled from 'styled-components';
import PluginLogo from './PluginLogo';
import ALink from './Link';
import Button from './Button';


const HeaderStyled = styled.header`
display: flex;
align-items: center;
padding: 0 5rem;
margin: 0 auto;
max-width: 110rem;
padding-top: 1rem;
`

function Header(){
  return (
    <HeaderStyled>

<PluginLogo />



<div style={{flex: 0.2}}>
<ALink  content='unfold.co' link='https://www.figma.com/c/user/391355592849403117' color='black' hoverColor='black' fontWeight='500'/>
</div>
<div style={{flex: 0.1}}>
<ALink  content='↓1.4K' decoration='none' fontWeight='500'/>
</div>
<Button content='↓ Install' color='black' border='2px solid black' hoverBorder='2px solid black' fontWeight='700'/>
    </HeaderStyled>

  )
}

export default Header;