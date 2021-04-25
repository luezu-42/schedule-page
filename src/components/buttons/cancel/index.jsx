import React from 'react';

import Button from './styles';

const CancelBtn = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text, onClick, type } = props;
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CancelBtn;
