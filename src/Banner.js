import React from 'react';
import styled from 'styled-components';
import banner from './banner.png'

const ImageStyled = styled.img`
  display: block;
  width: 98%;
  max-width: 100rem;
  margin: 0 auto;
`

function Banner(){
  return (
    <ImageStyled src={banner}/>
  )
}

export default Banner;