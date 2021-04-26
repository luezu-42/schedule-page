/* eslint-disable operator-linebreak */
import React, { useState, useContext, useEffect } from 'react';
import uniq from 'uniqid';

import ramdomColor from 'randomcolor';
import { Container, FormContact } from './styles';
import Input from '../../inputForm/index';
import CancelBtn from '../../buttons/cancel/index';
import SaveBtn from '../../buttons/save/index';
import { Context } from '../../../contexts/index';
import { PopContext } from '../../../contexts/PopUpForm/index';

const Form = () => {
  const { view, setView } = useContext(PopContext);
  const { value } = useContext(Context);
  const [valid, setValid] = useState(true);
  const [saveContact, setSaveContact] = useState({
    name: '',
    email: '',
    tel: '',
    color: ramdomColor(),
    id: uniq(),
  });
  const HandleChange = (e) => {
    setSaveContact({ ...saveContact, [e.target.name]: e.target.value });
    setValid(false);
    if (
      saveContact.name === '' &&
      saveContact.email === '' &&
      saveContact.tel === ''
    ) {
      setValid(true);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    value.push(saveContact);
    localStorage.setItem('contacts', JSON.stringify(value));
    setView('none');
  };

  useEffect(() => {
    setSaveContact({
      name: '',
      email: '',
      tel: '',
      color: ramdomColor(),
      id: uniq(),
    });
  }, [view]);
  return (
    <>
      <Container display={view}>
        <FormContact onSubmit={HandleSubmit}>
          <div>Criar novo contato</div>
          <span>
            <Input
              type="text"
              html="name"
              cont="Nome"
              onChange={HandleChange}
              name="name"
              id="name"
              req={false}
            />
            <Input
              type="email"
              html="email"
              cont="Email"
              name="email"
              req={false}
              onChange={HandleChange}
            />
            <Input
              type="tel"
              html="telephone"
              cont="Telefone"
              pattern="^\([1-9]{2}\)[0-9]{4,5}-[0-9]{4}$"
              name="tel"
              req={false}
              onChange={HandleChange}
            />
          </span>
          <span id="bnt-fix">
            <CancelBtn
              text="Cancelar"
              onClick={() => setView('none')}
              type="button"
            />
            <SaveBtn text="Salvar" type="submit" valid={valid} />
          </span>
        </FormContact>
      </Container>
    </>
  );
};

export default Form;
