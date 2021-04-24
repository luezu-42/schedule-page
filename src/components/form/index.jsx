import React, { useState, useEffect } from 'react';

import { Container, FormContact } from './styles';

const Form = (props) => {
  const [view, setView] = useState('none');

  useEffect(() => {
    setView(Object.values(props));
  }, [props]);
  return (
    <>
      <Container display={view} onClick={() => setView('none')}>
        <FormContact>Testeaaa</FormContact>
      </Container>
    </>
  );
};

export default Form;
