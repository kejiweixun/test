import React from 'react';
import styled from 'styled-components';


const FooterLogoStyled = styled.div.attrs(props => ({
    media: props.media || 'min-width: 645px',
}))`
    width: 20rem;
    height: 10rem;
    text-align: center;
    border-radius: 1rem;
    margin: 8rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    :hover{
        background: #F0F0F0
    }
    >img{
        width: 3rem;
        mix-blend-mode: multiply;
        margin-top: 2rem;
    }
    >p {
        color: #B2B2B2;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    @media(${props => props.media}){
        display: none;
    }
`


function FooterLogo(props){
    return (
        <FooterLogoStyled media={props.media}>
            <img src={props.footer_logo}></img>
            <p>Learn more about Figma</p>
        </FooterLogoStyled>
    )
}

export default FooterLogo;