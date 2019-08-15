import React from 'react';
import styled from 'styled-components';
import pluginLogo from './pluginLogo.png';

const LogoStyled = styled.div`
display: flex;
align-items: center;
flex: 1;
`

function PluginLogo(){
  return (
    <LogoStyled>
     <img src={pluginLogo} style={imgStyle} alt='skewdat logo'/>
     <p style={pStyle}>SkewDat</p>
    </LogoStyled>
  )
}


const imgStyle = {
  height: '3.5rem',
  display: 'block',
  marginRight: '1rem'
}

const pStyle = {
  fontSize: '2.5rem',
  fontWeight: 800,
}

export default PluginLogo;