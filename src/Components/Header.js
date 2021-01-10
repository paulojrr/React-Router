import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  margin-bottom: 2rem;
`;

const Ul = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  margin-right: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  background: #eee;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background: #ddd;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledNavLink exact to="/" activeStyle={{ background: '#ddd' }}>
            Produtos
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink
            exact
            to="/contato"
            activeStyle={{ background: '#ddd' }}
          >
            Contato
          </StyledNavLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Header;
