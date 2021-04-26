import React, { useState, useEffect } from 'react';

import Logo from '../../assets/ic-logo.svg';
import { Container, LogoImg, SearchBar } from './styles';
import Button from '../buttons/addNewContact/index';

const Header = () => {
  const [contact, setContact] = useState([]);
  const data = () => {
    const response = localStorage.getItem('contacts');
    setContact(response);
  };

  useEffect(() => {
    data();
  }, [contact]);
  return (
    <Container>
      <LogoImg src={Logo} alt="Logo" />
      {contact === null ? '' : <Button />}
      <SearchBar placeholder="Buscar..." />
    </Container>
  );
};

export default Header;
