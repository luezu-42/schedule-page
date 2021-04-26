/* eslint-disable implicit-arrow-linebreak */
import React, { useContext } from 'react';

import Form from '../../forms/formCreate/index';
import Button from './styles';
import { PopContext } from '../../../contexts/PopUpForm/index';

const AddContact = () => {
  const { view, setView } = useContext(PopContext);

  return (
    <>
      <Form display={view} />
      <Button
        type="button"
        onClick={() => setView('flex')}
        onFocus={() => setView('none')}
      >
        Criar contato
      </Button>
    </>
  );
};

export default AddContact;
