import React, { useContext } from 'react';

import Container from './styles';

import List from '../listContact/index';
import EmptyContact from '../emptyContacts/index';
import { Context } from '../../contexts/index';

const Content = () => {
  const { value } = useContext(Context);

  return (
    <Container>
      {value === null || value.length === 0 ? (
        <EmptyContact />
      ) : (
        <List list={value} />
      )}
    </Container>
  );
};

export default Content;
