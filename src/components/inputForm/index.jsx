/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';

import { Label, InpuT } from './styles';

const Input = (props) => {
  const { type, html, cont, pattern, onChange, name, value } = props;

  return (
    <Label htmlFor={html}>
      {cont}
      <InpuT
        type={type}
        pattern={pattern}
        onChange={onChange}
        name={name}
        value={value}
      />
    </Label>
  );
};

export default Input;
