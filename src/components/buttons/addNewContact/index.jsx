/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';

import Form from '../../forms/formCreate/index';
import Button from './styles';

const AddContact = () => {
  const [view, setView] = useState('none');

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
