/* eslint-disable object-curly-newline */
import React, { useContext, useState, useEffect } from 'react';
import { Formik } from 'formik';

import { Container, FormContact } from './styles';
import Input from '../../inputForm/index';
import CancelBtn from '../../buttons/cancel/index';
import SaveBtn from '../../buttons/save/index';
import { Context } from '../../../contexts/index';
import { PopContext } from '../../../contexts/PopUpForm/index';
import { OptionsContext } from '../../../contexts/EditDelete/index';

const Form = () => {
  const { edit, setEdit } = useContext(PopContext);
  const { data, setData } = useContext(Context);
  const { contact } = useContext(OptionsContext);
  const [newInfo, setNewInfo] = useState({
    name: contact.name,
    email: contact.email,
    tel: contact.tel,
    color: contact.color,
    id: contact.id,
  });

  const HandleSubmit = (value, actions) => {
    const del = data.filter((el) => el.id !== contact.id);
    del.push({
      name: value.name,
      email: value.email,
      tel: value.tel,
      color: contact.color,
      id: contact.id,
      newContact: false,
    });
    localStorage.setItem('contacts', JSON.stringify(del));
    setEdit('none');
    setData(del);
    actions.resetForm();
  };

  useEffect(() => {
    setNewInfo(contact);
  }, [contact]);
  return (
    <>
      <Container display={edit}>
        <Formik
          enableReinitialize
          onSubmit={HandleSubmit}
          initialValues={newInfo}
        >
          {({ values, handleChange, handleSubmit, dirty }) => (
            <FormContact onSubmit={handleSubmit}>
              <div>Editar contato</div>
              <span>
                <Input
                  type="text"
                  html="name"
                  cont="Nome"
                  onChange={handleChange}
                  name="name"
                  value={values.name}
                />
                <Input
                  type="email"
                  html="email"
                  cont="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  html="telephone"
                  cont="Telefone"
                  pattern="^\([1-9]{2}\)[0-9]{4,5}-[0-9]{4}$"
                  name="tel"
                  value={values.tel}
                  onChange={handleChange}
                />
              </span>
              <span id="bnt-fix">
                <CancelBtn
                  text="Cancelar"
                  onClick={() => setEdit('none')}
                  type="button"
                />
                <SaveBtn text="Salvar" type="submit" valid={!dirty} />
              </span>
            </FormContact>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Form;
