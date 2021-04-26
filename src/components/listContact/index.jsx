/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';

import Form from '../forms/formEdit/index';
import DeleteForm from '../forms/formDelete/index';
import HeaderList from '../headerList/index';
import Edit from '../../assets/ic-edit.svg';
import Delete from '../../assets/ic-delete.svg';
import { Context } from '../../contexts/index';
import { PopContext } from '../../contexts/PopUpForm/index';
import { OptionsContext } from '../../contexts/EditDelete/index';
import { Container, Contacts, Icon, Options } from './styles';

const List = () => {
  const { edit, setEdit, del, setDel } = useContext(PopContext);
  const { value } = useContext(Context);
  const { setContact } = useContext(OptionsContext);
  // eslint-disable-next-line no-unused-vars

  const OrderByName = value.sort((a, b) => {
    if (String(a.name).toUpperCase() > String(b.name).toUpperCase()) {
      return 1;
    }
    if (String(b.name).toUpperCase() > String(a.name).toUpperCase()) {
      return -1;
    }
    return 0;
  });
  const FilterDelete = (id, af) => {
    const delData = value.filter((e) => e[id] !== af);
    setContact(delData);
    setDel('felx');
  };
  const FilterEdit = (id, el) => {
    const fil = value.filter((e) => e[id] === el);
    setContact({
      name: fil[0].name,
      email: fil[0].email,
      tel: fil[0].tel,
      color: fil[0].color,
      id: fil[0].id,
    });
  };
  const HandleEdit = (id, el) => {
    setEdit('flex');
    FilterEdit(id, el);
  };
  return (
    <Container>
      <Form display={edit} />
      <DeleteForm display={del} />
      <HeaderList />
      {OrderByName.map((e) => (
        <Contacts key={e.id}>
          <Icon color={e.color}>{String(e.name[0]).toUpperCase()}</Icon>
          <div>{e.name}</div>
          <div>{e.email}</div>
          <div>{e.tel}</div>
          <Options>
            <img
              src={Edit}
              alt="Editar contato"
              onClick={() => HandleEdit('id', e.id)}
              onFocus={() => setEdit('none')}
            />
            <img
              onClick={() => FilterDelete('id', e.id)}
              onFocus={() => setDel('none')}
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
