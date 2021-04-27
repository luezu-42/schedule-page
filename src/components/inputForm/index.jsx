/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';

import { Label, Inputs } from './styles';

const Input = (props) => {
  const { type, html, cont, pattern, onChange, name, id, value } = props;

  return (
    <Label htmlFor={html}>
      {cont}
      <Inputs
        type={type}
        pattern={pattern}
        onChange={onChange}
        name={name}
        id={id}
        value={value}
      />
    </Label>
  );
};

export default Input;
