import React from 'react';
import styled from 'styled-components';

import Head from './Head';
import image from '../img/contato.jpg';

const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
`;
const Data = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0.8rem;

  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 2px;
    background: #ddd;
    margin-right: 10px;
  }
`;

const Image = styled.img`
  border-radius: 10px;
`;

const Contact = () => {
  return (
    <Content className="animeLeft">
      <Head title="React | Contato" />
      <Image src={image} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <Data>
          <Item>paulo@exemple.com</Item>
          <Item>99999-9999</Item>
          <Item>Rua xxx, 999</Item>
        </Data>
      </div>
    </Content>
  );
};

export default Contact;
