/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from 'react';

import Form from '../forms/formEdit/index';
import DeleteForm from '../forms/formDelete/index';
import ListTitle from '../listTitle/index';
import Edit from '../../assets/ic-edit.svg';
import Delete from '../../assets/ic-delete.svg';
import { Context } from '../../contexts/index';
import { PopContext } from '../../contexts/PopUpForm/index';
import { OptionsContext } from '../../contexts/EditDelete/index';
import { Container, Contacts, Icon, Options } from './styles';

const List = () => {
  const { edit, setEdit, del, setDel } = useContext(PopContext);
  const { data, setData } = useContext(Context);
  const { setContact } = useContext(OptionsContext);

  const fixArr = [...data];
  const OrderByName = fixArr.sort((a, b) => {
    if (String(a.name).toUpperCase() > String(b.name).toUpperCase()) {
      return 1;
    }
    if (String(b.name).toUpperCase() > String(a.name).toUpperCase()) {
      return -1;
    }
    return 0;
  });
  const HandleDelete = (id, af) => {
    const delData = data.filter((e) => e[id] !== af);
    setContact(delData);
    setDel('flex');
  };

  const FilterEdit = (id, el) => {
    const fil = data.filter((e) => e[id] === el);
    setContact({
      name: fil[0].name,
      email: fil[0].email,
      tel: fil[0].tel,
      color: fil[0].color,
      id: fil[0].id,
      newContact: false,
    });
  };
  const HandleEdit = (id, el) => {
    FilterEdit(id, el);
    setEdit('flex');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const dataC = data.filter((e) => {
        if (e.newContact === true) {
          return 1;
        }
        return 0;
      });
      if (dataC === undefined || null || dataC.length === 0) {
        return;
      }
      if (dataC.length !== 0 || dataC !== null || dataC !== undefined) {
        const dataD = data.filter((e) => {
          if (dataC.id !== e.id) {
            return 1;
          }
          return 0;
        });
        if (dataD.length !== 0 || dataD !== null || dataD !== undefined) {
          const dataG = data.filter((e) => {
            if (dataC[0].id !== e.id) {
              return 1;
            }
            return 0;
          });
          const dataE = data.filter((e) => {
            if (dataC[0].id === e.id) {
              return 1;
            }
            return 0;
          });
          dataG.push({
            name: dataE[0].name,
            email: dataE[0].email,
            tel: dataE[0].tel,
            color: dataE[0].color,
            id: dataE[0].id,
            newContact: false,
          });
          localStorage.setItem('contacts', JSON.stringify(dataG));
          setData(dataG);
        }
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <Container>
      <Form display={edit} />
      <DeleteForm display={del} />
      <ListTitle />
      {OrderByName.map((e) => (
        <Contacts
          key={e.id}
          highlight={e.newContact === true ? '#fff3f2' : 'white'}
        >
          <Icon color={e.color}>
            {e.name === undefined
              ? ''
              : String(e.name[0]).toUpperCase() === 'UNDEFINED'
              ? ''
              : String(e.name[0]).toUpperCase()}
          </Icon>
          <div>{e.name}</div>
          <div>{e.email}</div>
          <div>{e.tel}</div>
          <Options>
            <img
              src={Edit}
              alt="Editar contato"
              onClick={() => HandleEdit('id', e.id)}
            />
            <img
              onClick={() => HandleDelete('id', e.id)}
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
