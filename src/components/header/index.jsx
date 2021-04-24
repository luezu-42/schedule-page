import React from 'react';

import Logo from '../../assets/ic-logo.svg';

import { Container, LogoImg, SearchBar } from './styles';
import Button from '../buttons/addNewContact/index';

const Header = () => {
  const data = () => {
    const response = localStorage.getItem('contacts');

    return response;
  };
  return (
    <Container>
      <LogoImg src={Logo} alt="" />
      {data === null ? <Button /> : ''}
      <SearchBar placeholder="Buscar..." />
    </Container>
  );
};

export default Header;
