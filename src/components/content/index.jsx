import React, { useEffect } from 'react';

import Container from './styles';

import EmptyContact from '../emptyContacts/index';

const Content = () => {
  const data = () => {
    const response = localStorage.getItem('contacts');

    return response;
  };

  useEffect(() => {}, []);
  return (
    <Container>{data === null ? <div>teste</div> : <EmptyContact />}</Container>
  );
};

export default Content;
