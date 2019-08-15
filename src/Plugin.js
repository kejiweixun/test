import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import plugin from './plugin.png'

function Title(props){
  return(
    <h1>{props.content}</h1>
  )
};

function ARightPlugin(props){
  return (
    <li>
 <img src={plugin}/>
        Plugin
    </li>
  )
}

const ListStyled = styled.ul`
  list-style-type: none;
  list-style-position: outside;
`


function RightPlugin(props){
  const arr = [1,1,1,1,1,1,1,1,1,1]
  const {plugin, setPlugin} = useState(arr);
  const PluginList = plugin.map((item, index)=>{return <ARightPlugin />})
  return (
    <>
    <Title content='Popular' />
    <ListStyled>
<PluginList />
    </ListStyled>
    </>
  )
}

function ALeftPlugin(props){
  return (
    <>
    <img src={plugin} />
    <p>Find and Replace</p>
    <p>Search for texts on your page and replace them just like a text editor.</p>
    <p>kejiweixun</p>
    </>
  )
}

function LeftPlugin(props){
  const arr = [1,1,1,1,1,1,1,1];
  const [plugin, setPlugin] = useState(arr);
  const PluginList = plugin.map(()=>{return <ALeftPlugin/>})
  return (
    <>
    <Title content='Featured' />
    <PluginList />
    </>
  )
}

function AllPlugin(props){
  return (
    <button>Browse all plugins</button>
  )
}

function CreatePlugin(props){
  return (
    <>
    <p>Create your own plugins</p>
    <p>Build and publish plugins to extengd Figma beyond your imagination</p>
    <p>Developer documentation</p>
    </>
  )
}

function Plugin(){
  return (
    <>
    <LeftPlugin />
    <RightPlugin />
    <AllPlugin />
    <CreatePlugin />
    </>
  )
}

export default Plugin;