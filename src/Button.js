import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button.attrs(props => ({
  color: props.color || 'red',
  hoverColor: props.hoverColor || 'black',
  hoverBorder: props.hoverBorder || '1px solid white',
  border: props.border || 'none',
  fontWeight: props.fontWeight || 'normal',
}))`
width: 8rem;
font-size: 1.5rem;
font-weight: ${props => props.fontWeight};
height: 3rem;
border: ${props => props.border};
border-radius: 0.8rem;
background: ${props => props.background !== '#212121'? 'none': '#212121'};
color: ${props => props.color};
  :hover {
    border: ${props => props.hoverBorder};
    border-radius: 0.8rem;
    color: ${props => props.hoverColor};
  }
`

function Button(props){
  return (
    <React.Fragment>
      <ButtonStyled color={props.color} hoverColor={props.hoverColor} border={props.border} hoverBorder={props.hoverBorder} fontWeight={props.fontWeight}>{props.content}</ButtonStyled>
    </React.Fragment>
  )
};



export default Button;