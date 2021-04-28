import React, { useContext } from 'react';

import { OptionsContext } from '../../../contexts/EditDelete/index';
import { PopContext } from '../../../contexts/PopUpForm/index';
import { Container, FormDelete } from './styles';
import CancelBtn from '../../buttons/cancel/index';
import SaveBtn from '../../buttons/save/index';
import { Context } from '../../../contexts/index';

const DeleteForm = () => {
  const { setData } = useContext(Context);
  const { contact } = useContext(OptionsContext);
  const { del, setDel } = useContext(PopContext);
  const valid = false;
  const handleSubmit = () => {
    localStorage.setItem('contacts', JSON.stringify(contact));
    setData(contact);
    setDel('none');
  };
  return (
    <Container display={del}>
      <FormDelete>
        <div>Deletar contato</div>
        <div>Deseja deletar contato?</div>

        <span id="bnt-fix">
          <CancelBtn
            text="Cancelar"
            onClick={() => setDel('none')}
            type="button"
          />
          <SaveBtn
            text="Deletar"
            type="submit"
            valid={valid}
            onClick={handleSubmit}
          />
        </span>
      </FormDelete>
    </Container>
  );
};

export default DeleteForm;
