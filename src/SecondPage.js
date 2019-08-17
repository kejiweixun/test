import React from 'react';
import styled from 'styled-components';
import plugin from './plugin.png'
import Link from './Link'

function Title(props) {
  return (
    <h1 style={{ fontSize: '2.5rem', paddingLeft: `${props.paddingLeft}` }}>{props.content}</h1>
  )
};

const ARightPluginStyled = styled.li`
display: flex;
align-items: center;
line-height: 1rem;
border-radius: 0.5rem;
line-height: 1.2;
padding-left: 1rem;
:hover{
  background: #ECECEC;
}

>img{
  mix-blend-mode: multiply;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
}
`



function ARightPlugin(props) {
  return (
    <ARightPluginStyled>
        <img src={plugin} alt='plugin icon' />
        <p style={{ fontWeight: '500' }}>Some Plugins</p>
    </ARightPluginStyled>
  )
}

const ListStyled = styled.ul`
  list-style-type: none;
  list-style-position: outside;
  padding-right: 2rem;
`


function RightPlugin(props) {
  return (
    <div style={{width: '30rem'}}>
      <ListStyled>
        <Title content='Popular' />
        <ARightPlugin />
        <ARightPlugin />
        <ARightPlugin />
        <ARightPlugin />
        <ARightPlugin />
        <ARightPlugin />
        <ARightPlugin />
        <ARightPlugin />
        <ARightPlugin />
      </ListStyled>
    </div>
  )
}

const ALeftPluginStyled = styled.div`
color: #323232;
line-height: 1rem;
padding: 2rem;
padding-right: 0;
border-radius: 1rem;
:hover{
  background: #ECECEC;
}
>p:nth-of-type(1){
  font-weight: 600;
}
>p:nth-of-type(2){
  font-size: 1.2rem;
}
>p:nth-of-type(3){
  font-size: 1.2rem;
  color: #ABABAB;
}
>img{
  mix-blend-mode: multiply;
  width: 3rem;
  height: 3rem;
}
`

function ALeftPlugin(props) {
  return (
    <ALeftPluginStyled>
      <img src={plugin} alt='plugin icon' />
      <p>Find and Replace</p>
      <p>Search for texts on your page and replace them just like a text editor.</p>
      <p>kejiweixun</p>
    </ALeftPluginStyled>
  )
}

const LeftPluginStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21rem,auto));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  }
`

const AllPluginButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function LeftPlugin(props) {
  return (
    <div style={{flex: 1, minWidth: '23rem'}}>

      <LeftPluginStyled>
        <div style={{ gridColumn: '1 / -1', marginBottom: '-1.5rem' }}>
          <Title content='Featured' paddingLeft='2rem' />
        </div>
        <ALeftPlugin />
        <ALeftPlugin />
        <ALeftPlugin />
        <ALeftPlugin />
        <ALeftPlugin />
        <ALeftPlugin />
        <ALeftPlugin />
        <ALeftPlugin />
        <ALeftPlugin />
        <div style={AllPluginButtonStyle}>
          <AllPlugin />
        </div>
      </LeftPluginStyled>
    </div>
  )
}


const buttonStyle = {
  color: '#198CFA',
  border: '1px solid #198CFA',
  borderRadius: '1rem',
  height: '6rem',
  width: '80%',
  outline: 'none',
  fontSize: '1.5rem',
  fontWeight: '500',
  background: 'white'

}

function AllPlugin(props) {
  return (
    <button style={buttonStyle}>Browse all plugins</button>
  )
}

const CreatePluginStyled = styled.div`
color: #262626;
margin: 6rem 0;
padding-left: 2rem;
line-height: 3rem;
>p:nth-child(1){
  font-size: 2.5rem;
  font-weight: 700;
}
`

function CreatePlugin(props) {
  return (
    <CreatePluginStyled>
      <p>Create your own plugins</p>
      <p>Build and publish plugins to extengd Figma beyond your imagination</p>
      <Link content='→ Developer documentation' link='https://www.figma.com/plugin-docs'/>
    </CreatePluginStyled>
  )
}

const SecondPageStyled = styled.div`
padding-top: 2rem;
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 0 auto;
  width: 97%;
`

const PluginStyled = styled.div`
display: flex;
flex-wrap: wrap;
`

function LeftRightPlugin() {
  return (
    <PluginStyled>
      <LeftPlugin />
      <RightPlugin />
    </PluginStyled>
  )
}


function SecondPage() {
  return (
    <SecondPageStyled>
      < LeftRightPlugin />
      <CreatePlugin />
    </SecondPageStyled>
  )
}

export default SecondPage;