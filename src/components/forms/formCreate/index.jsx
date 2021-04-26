import React, { useState, useEffect } from 'react';
import uniq from 'uniqid';

import ramdomColor from 'randomcolor';
import { Container, FormContact } from './styles';
import Input from '../../inputForm/index';
import CancelBtn from '../../buttons/cancel/index';
import SaveBtn from '../../buttons/save/index';

const Form = (props) => {
  const [view, setView] = useState('none');
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
      id: uniq(),
    });
    localStorage.setItem('contacts', JSON.stringify(value));
  };

  useEffect(() => {
    setView(Object.values(props));
  }, [props]);

  useEffect(() => {
    if (name === '' && email === '' && tel === '') {
      setValid(true);
    }
  }, [value]);

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
              req={name === ''}
              refi={name}
            />
            <Input
              type="email"
              html="email"
              cont="Email"
              name="email"
              refi={email}
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
