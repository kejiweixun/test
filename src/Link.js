import React from 'react';
import styled from 'styled-components';

const LinkStyled = styled.a.attrs(props => ({
  color: props.color || 'black',
  hoverColor: props.hoverColor || 'black',
  decoration: props.decoration || 'underline',
  fontWeight: props.fontWeight || 'normal',
}))`
display: inline-block;
  font-size: 1.5rem;
  text-decoration: none;
  padding-right: 1.5rem;
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
    :hover {
    text-decoration: ${props => props.decoration};
    color: ${props => props.hoverColor}
  }
`

function Link(props) {
  return (
    <LinkStyled href={props.link} color={props.color} hoverColor={props.hoverColor} decoration={props.decoration}  fontWeight={props.fontWeight}>{props.content}</LinkStyled>
  )
}

export default Link;