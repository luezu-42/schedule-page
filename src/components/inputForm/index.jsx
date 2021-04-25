/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';

import { Label, InputS } from './styles';

const Input = (props) => {
  const { type, html, cont, pattern, onChange, name, id, refi, req } = props;

  return (
    <Label htmlFor={html}>
      {cont}
      <InputS
        type={type}
        pattern={pattern}
        onChange={onChange}
        name={name}
        id={id}
        ref={refi}
        required={req}
      />
    </Label>
  );
};

export default Input;
