import React, { useState, useEffect } from 'react';

import Container from './styles';

import List from '../listContact/index';
import EmptyContact from '../emptyContacts/index';

const Content = () => {
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
      {contact === null ? <EmptyContact /> : <List list={contact} />}
    </Container>
  );
};

export default Content;
