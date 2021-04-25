/* eslint-disable react/prop-types */
import React from 'react';

import Button from './styles';

const SaveBtn = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { text, type, valid, onClick } = props;
  return (
    <Button type={type} disabled={valid} opacityValid={valid} onClick={onClick}>
      {text}
    </Button>
  );
};

export default SaveBtn;
