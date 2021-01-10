import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #aaa;
  height: 10rem;
  padding-top: 5rem;
  box-sizing: border-box;
`;

const Footer = () => {
  return (
    <Content>
      <p>Direitos reservados</p>
    </Content>
  );
};

export default Footer;
