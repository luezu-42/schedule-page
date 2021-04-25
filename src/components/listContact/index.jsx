/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';

import HeaderList from '../headerList/index';
import { Container, Contacts } from './styles';

const List = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('contacts')) === null) {
      setList([]);
    }
    if (JSON.parse(localStorage.getItem('contacts')) != null) {
      setList(JSON.parse(localStorage.getItem('contacts')));
    }
  }, [props]);
  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <Container>
      <HeaderList />
      <Contacts>teste</Contacts>
    </Container>
  );
};

export default List;
