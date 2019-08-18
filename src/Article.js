import React from 'react';
import styled from 'styled-components';
import Sidebar2 from './Sidebar2'

const ArticleStyled = styled.article`
font-size: 1.5rem;
padding: 0 4rem;
line-height: 1.7;
flex: 2;
min-width: 35rem;

> p{
  margin-top: 3rem;
}

> .listTitle {
  line-height: 0rem;
}

>p:last-child {
  margin-top: 0;
}

>.versionTitle {
  margin-bottom: 1rem;
  font-weight: 700;
}

> .list {
  padding-left: 2rem;;
}
> .version {
  color: #A4A4A4;
}
`

function Article(props) {
  return ( 
   <ArticleStyled>
    <p>It’s stupid simple, and yes you absolutely needs this! </p>
    <p>Let’s be honest we’ve all at least once tried to skew things up a notch... 
      and admit it, whatever hack you tried was just  a dirty hack. Well now you can just say SkewDat! With our  plugin you can skew anything {'&'}  
      everything in sight within the comfort of everyone's favorite design program, ehm ehm Figma.
       Skew settling for anything less than perfect! We here at Unfold feed 
       off perfection (we will literally die if we don't eat enough perfection) 
       so you know this plugin will be amazing.  Hopping to Illustrator, Sketch or using other hacks?
    Hah, SkewDat!</p>
    <p className='listTitle'>Plug-in features:</p>
<ul className='list'>
      <li>Live preview your adjustments</li>
      <li>Minimal interface, straight to the point</li>
      <li>Skew multiple objects at once</li>
      <li>Ability to revert back to original</li>
</ul>
 
      <p className='listTitle'>Upcoming features:</p>

<ul className='list'>
<li>Isometric mode</li>
<li>Advanced controls</li>
</ul>

<ButtonStyled>↓ Install</ButtonStyled>
<Sidebar2 />

<p className='versionTitle'>Version history</p>

<p className='version'>Version 1 on 2019年8月10日</p>
  </ArticleStyled>)};


const ButtonStyled = styled.button`
border: 2px solid #2C2C2C;
width: 100%;
height: 3.5rem;
font-size: 1.5rem;
font-weight: bold;
border-radius: 0.5rem;
background: transparent;
outline: none;
margin: 3rem 0;
@media(min-width: 645px) {
  display: none;
}
`



export default Article