import React, { useState, useEffect, useContext } from 'react';

import ramdomColor from 'randomcolor';
import { Container, FormContact } from './styles';
import Input from '../../inputForm/index';
import CancelBtn from '../../buttons/cancel/index';
import SaveBtn from '../../buttons/save/index';
import FormContext from '../../../contexts/index';

const Form = () => {
  const { view, setView } = useContext(FormContext);
  const [valid, setValid] = useState(true);
  const [value, setValue] = useState([]);

  const name = React.createRef();
  const email = React.createRef();
  const tel = React.createRef();
  const HandleChange = () => {
    setValid(false);
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('contacts')) === null) {
      setValue([]);
    }
    if (JSON.parse(localStorage.getItem('contacts')) != null) {
      setValue(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  const HandleSubmit = () => {
    value.push({
      name: name.current.value,
      email: email.current.value,
      tel: tel.current.value,
      color: ramdomColor(),
    });
    localStorage.setItem('contacts', JSON.stringify(value));
  };

  useEffect(() => {
    if (name === '' && email === '' && tel === '') {
      setValid(true);
    }
  }, [value]);

  const Value = () => 'TESTE';
  return (
    <>
      <Container display={view}>
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
              value={Value()}
              req={name === ''}
              refi={name}
            />
            <Input
              type="email"
              html="email"
              cont="Email"
              name="email"
              refi={email}
              value={Value()}
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
              value={Value()}
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
