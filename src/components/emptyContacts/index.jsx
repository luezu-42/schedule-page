import React from 'react';

import Button from '../buttons/addNewContact/index';
import { Img, Menssage } from './styles';

import Book from '../../assets/ic-book.svg';

const EmptyContacts = () => (
  <>
    <Img src={Book} alt="" />
    <Menssage>Nenhum contato foi encontrado ainda.</Menssage>
    <Button />
  </>
);

export default EmptyContacts;
