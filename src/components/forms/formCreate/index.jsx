/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import uniq from 'lodash.uniqueid';
import ramdomColor from 'randomcolor';
import { Formik } from 'formik';

import { Container, FormContact } from './styles';
import Input from '../../inputForm/index';
import CancelBtn from '../../buttons/cancel/index';
import SaveBtn from '../../buttons/save/index';
import { Context } from '../../../contexts/listContact/index';
import { PopContext } from '../../../contexts/PopUpForm/index';

const Form = () => {
  const { view, setView } = useContext(PopContext);
  const { data, setData } = useContext(Context);
  const HandleSubmit = (values, actions) => {
    const arr = [...data];
    const iduniq = uniq() + Date.now();
    arr.push({
      name: values.name,
      email: values.email,
      tel: values.tel,
      color: ramdomColor(),
      id: iduniq,
      newContact: true,
    });
    localStorage.setItem('contacts', JSON.stringify(arr));
    setView('none');
    setData(arr);
    actions.resetForm();
  };
  return (
    <>
      <Container display={view}>
        <Formik
          onSubmit={HandleSubmit}
          initialValues={{
            name: '',
            email: '',
            tel: '',
          }}
        >
          {({ values, handleChange, handleSubmit, dirty }) => (
            <FormContact onSubmit={handleSubmit}>
              <div>Criar novo contato</div>
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
                  onClick={() => setView('none')}
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
