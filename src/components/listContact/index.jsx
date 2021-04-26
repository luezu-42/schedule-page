/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';

import Form from '../forms/formEdit/index';
import HeaderList from '../headerList/index';
import Edit from '../../assets/ic-edit.svg';
import Delete from '../../assets/ic-delete.svg';
import FormContext from '../../contexts/index';
import { Container, Contacts, Icon, Options } from './styles';

const List = (props) => {
  const { view, setView } = useContext(FormContext);
  const [list, setList] = useState([]);
  // eslint-disable-next-line no-undef
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('contacts')) === null) {
      setList([]);
    }
    if (JSON.parse(localStorage.getItem('contacts')) != null) {
      setList(JSON.parse(localStorage.getItem('contacts')));
    }
  }, [props]);

  const OrderByName = list.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });

  return (
    <Container>
      <Form display={view} />
      <HeaderList />
      {OrderByName.map((e, i) => (
        <Contacts key={e.id}>
          <Icon color={e.color}>A</Icon>
          <div>{e.name}</div>
          <div>{e.email}</div>
          <div>{e.tel}</div>
          <Options>
            <img
              src={Edit}
              alt="Editar contato"
              onClick={() => setView('flex')}
              onFocus={() => setView('none')}
            />
            <img
              onClick={() => console.log(i)}
              src={Delete}
              alt="Deletar contato"
            />
          </Options>
        </Contacts>
      ))}
    </Container>
  );
};

export default List;
