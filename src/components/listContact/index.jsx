/* eslint-disable operator-linebreak */
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
  const handleDelete = (id, af) => {
    const delData = data.filter((e) => e[id] !== af);
    setContact(delData);
    setDel('flex');
  };

  const filterEdit = (id, el) => {
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
  const handleEdit = (id, el) => {
    filterEdit(id, el);
    setEdit('flex');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const HighlightContacts = data.filter((e) => {
        if (e.newContact === true) {
          return 1;
        }
        return 0;
      });
      if (
        HighlightContacts === undefined ||
        null ||
        HighlightContacts.length === 0
      ) {
        return;
      }
      if (
        HighlightContacts.length !== 0 ||
        HighlightContacts !== null ||
        HighlightContacts !== undefined
      ) {
        const OldContactList = data.filter((e) => {
          if (HighlightContacts.id !== e.id) {
            return 1;
          }
          return 0;
        });
        if (
          OldContactList.length !== 0 ||
          OldContactList !== null ||
          OldContactList !== undefined
        ) {
          const OtherHighlights = data.filter((e) => {
            if (HighlightContacts[0].id !== e.id) {
              return 1;
            }
            return 0;
          });
          const HighlightOff = data.filter((e) => {
            if (HighlightContacts[0].id === e.id) {
              return 1;
            }
            return 0;
          });
          OtherHighlights.push({
            name: HighlightOff[0].name,
            email: HighlightOff[0].email,
            tel: HighlightOff[0].tel,
            color: HighlightOff[0].color,
            id: HighlightOff[0].id,
            newContact: false,
          });
          localStorage.setItem('contacts', JSON.stringify(OtherHighlights));
          setData(OtherHighlights);
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
              onClick={() => handleEdit('id', e.id)}
            />
            <img
              onClick={() => handleDelete('id', e.id)}
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
