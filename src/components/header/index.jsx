/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react';

import Logo from '../../assets/ic-logo.svg';
// eslint-disable-next-line object-curly-newline
import { Container, LogoImg, SearchBar, Contact, Icon } from './styles';
import Button from '../buttons/addNewContact/index';

import { Context } from '../../contexts/index';

const Header = () => {
  const { data } = useContext(Context);
  const [filterList, setFilterList] = useState('');
  const [oldList, setOldList] = useState(['']);
  const [display, setDisplay] = useState('none');
  const handleChange = (e) => {
    const { value } = e.target;
    setFilterList(value);
    setOldList([...data].filter((el) => String(el.name).includes(filterList)));
  };
  const defaultValue = () => {
    setOldList(['']);
    setDisplay('none');
  };
  const clickViewList = () => setDisplay('flex');
  return (
    <Container>
      <LogoImg src={Logo} alt="Logo" />
      {data === null || data.length === 0 ? '' : <Button />}
      <SearchBar>
        <input
          type="text"
          onChange={handleChange}
          onClick={clickViewList}
          placeholder="Buscar..."
          onBlur={defaultValue}
        />

        {oldList.map((e) => (
          <Contact key={e.id} display={display}>
            <Icon color={e.color}>
              {e.name === undefined
                ? ''
                : String(e.name[0]).toUpperCase() === 'UNDEFINED'
                ? ''
                : String(e.name[0]).toUpperCase()}
            </Icon>
            <div>{e.name}</div>
          </Contact>
        ))}
      </SearchBar>
    </Container>
  );
};

export default Header;
