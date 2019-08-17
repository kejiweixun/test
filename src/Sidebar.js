import React from 'react';
import Link from './Link';
import styled from 'styled-components';
import link from './link.jpg';
import twitter from './twitter.jpg';
import facebook from './facebook.jpg';

const SidebarStyled = styled.div`
flex: 1;
min-width: 30rem;
padding: 4rem;
`


const titleStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',

}

function SubSidebar(props) {
  return (
    <>
      <p style={titleStyle}>{props.titleContent}</p>
      <Link content={props.linkContent} link={props.link} />
    </>
  )
}

const ListStyled = styled.ul`
list-style-type: none;
padding-left: 0;
`
const imgStyle = {
  display: 'block',
  width: '2.5rem',
  paddingRight: '0.5rem'
}

const liStyle = {
  display: 'flex',
  alignItems: 'center',
  lineHeight: '3rem'
}

function Share(props) {
  return (
    <>
      <p style={titleStyle}>Share</p>
      <ListStyled>
        <li style={liStyle}>
          <img src={link} style={imgStyle} alt='copy sign'/>
          <Link content='Copy link'link=''/>
        </li>
        <li style={liStyle}>
          <img src={facebook} style={imgStyle} alt='facebook logo'/>
          <Link content='Facebook' link='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.figma.com%2Fc%2Fplugin%2F741472919529947576%2FSkewDat'/>
        </li>
        <li style={liStyle}>
          <img src={twitter} style={imgStyle} alt='twitter logo'/>
          <Link content='Twitter' link='https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.figma.com%2Fc%2Fplugin%2F741472919529947576%2FSkewDat&text=Check+out+this+awesome+%23figmaplugin%3A+SkewDat+plugin+by+unfold.co+in+%40figmadesign%3A'/>
        </li>
      </ListStyled>
    </>
  )
}


function Sidebar(props) {
  return (
    <SidebarStyled>
      <SubSidebar titleContent='Publisher' link='https://www.figma.com/c/user/391355592849403117' linkContent='unfold.co' />
      <br />
      <br />
      <br />
      <SubSidebar titleContent='Support contact' link='hello@unfold.co' linkContent='hello@unfold.co' />
      <br />
      <br />
      <br />
<Share />
    </SidebarStyled>

  )
}

export default Sidebar;