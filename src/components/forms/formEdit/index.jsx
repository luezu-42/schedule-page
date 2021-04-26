/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';

import { Container, FormContact } from './styles';
import Input from '../../inputForm/index';
import CancelBtn from '../../buttons/cancel/index';
import SaveBtn from '../../buttons/save/index';
import { Context } from '../../../contexts/index';
import { PopContext } from '../../../contexts/PopUpForm/index';
import { OptionsContext } from '../../../contexts/EditDelete/index';

const Form = () => {
  const { edit, setEdit } = useContext(PopContext);
  const { value } = useContext(Context);
  const { contact } = useContext(OptionsContext);
  const [valid, setValid] = useState(true);

  const name = React.createRef();
  const email = React.createRef();
  const tel = React.createRef();
  const HandleChange = () => {
    setValid(false);
    if (name === '' && email === '' && tel === '') {
      setValid(true);
    }
  };
  const HandleSubmit = () => {
    const del = value.filter((e) => e.id !== contact.id);
    del.push({
      name: name.current.value,
      email: email.current.value,
      tel: tel.current.value,
      color: contact.color,
      id: contact.id,
    });
    localStorage.setItem('contacts', JSON.stringify(del));
  };

  return (
    <>
      <Container display={edit}>
        <FormContact onSubmit={HandleSubmit}>
          <div>Editar contato</div>
          <span>
            <Input
              type="text"
              html="name"
              cont="Nome"
              onChange={HandleChange}
              name="name"
              id="name"
              value={contact.name}
              req={name === ''}
              refi={name}
            />
            <Input
              type="email"
              html="email"
              cont="Email"
              name="email"
              refi={email}
              value={contact.email}
              req={email === ''}
              onChange={HandleChange}
            />
            <Input
              type="tel"
              html="telephone"
              cont="Telefone"
              pattern="^\([1-9]{2}\)[0-9]{4,5}-[0-9]{4}$"
              name="tel"
              req={tel === ''}
              refi={tel}
              value={contact.tel}
              onChange={HandleChange}
            />
          </span>
          <span id="bnt-fix">
            <CancelBtn
              text="Cancelar"
              onClick={() => setEdit('none')}
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
