import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import logo from './drawer_logo.png'

const DrawerStyled = styled.div`
    z-index: 100;
    background: #2C2C2C;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%
    height: 100%;
    >div img {
        width: 10rem;
        margin: 7rem 0;
    }
    >p a, p, button{
        color: white;
        font-size: 1.8rem;
        margin: 1.5rem 0;
    }
    >p a {
        text-decoration: none;
        cursor: text;
    }

    button {
        border: 1px solid white;
        border-radius: 0.5rem;
        width: 13rem;
        height: 4rem;
    }

    >p:last-child {
        font-size: 1rem;
        position: fixed;
        line-height: 0;
        margin: 0;
        left: 1.5rem;
        top: 2rem;
        cursor: pointer;
    }
`

function Drawer(props){
    return (
        <DrawerStyled>
            <div>
                <img src={logo} alt='logo'></img>
            </div>
            <p><a href='Figma.com'>Figma.com</a></p>
            <p>Log in</p>
            <Button content='Sugn up'/>
            <p onClick={props.click}>X</p>
        </DrawerStyled>
    )
}

export default Drawer;