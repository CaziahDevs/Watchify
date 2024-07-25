import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #FFFFFF;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
        <p>�� 2024 Watchify. All rights reserved.</p>
    </FooterContainer>
  )
}

export default Footer