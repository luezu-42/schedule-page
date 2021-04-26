import React, { useContext } from 'react';

import { OptionsContext } from '../../../contexts/EditDelete/index';
import { PopContext } from '../../../contexts/PopUpForm/index';
import { Container, FormDelete } from './styles';
import CancelBtn from '../../buttons/cancel/index';
import SaveBtn from '../../buttons/save/index';

const DeleteForm = () => {
  const { contact } = useContext(OptionsContext);
  const { del, setDel } = useContext(PopContext);
  const valid = false;
  const HandleSubmit = () => {
    localStorage.setItem('contacts', JSON.stringify(contact));
  };
  return (
    <Container display={del}>
      <FormDelete onSubmit={HandleSubmit}>
        <div>Deletar contato</div>
        <div>Deseja deletar contato?</div>

        <span id="bnt-fix">
          <CancelBtn
            text="Cancelar"
            onClick={() => setDel('none')}
            type="button"
          />
          <SaveBtn text="Salvar" type="submit" valid={valid} />
        </span>
      </FormDelete>
    </Container>
  );
};

export default DeleteForm;
