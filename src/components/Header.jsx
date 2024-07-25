import React from 'react'
import styled from'styled-components';
import SpotifyAuth from './SpotifyAuth';

const HeaderContainer = styled.div`
  background-color: #FFFFFF;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const HeaderTitle = styled.h1`
  
`;

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderTitle>Watchify</HeaderTitle>
        <SpotifyAuth/>
    </HeaderContainer>
  )
}

export default Header