import React, { useContext } from 'react';

import Container from './styles';

import List from '../listContact/index';
import EmptyContact from '../emptyContacts/index';
import { Context } from '../../contexts/index';

const Content = () => {
  const { data } = useContext(Context);
  return (
    <Container>
      {data === null || data.length === 0 ? (
        <EmptyContact />
      ) : (
        <List list={data} />
      )}
    </Container>
  );
};

export default Content;
