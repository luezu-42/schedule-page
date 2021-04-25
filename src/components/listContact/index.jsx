/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const List = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('contacts')) === null) {
      setList([]);
    }
    if (JSON.parse(localStorage.getItem('contacts')) != null) {
      setList(JSON.parse(localStorage.getItem('contacts')));
    }
  }, [props]);
  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <Container>
      {list.map((e) => (
        <div>
          {e.name}
          {e.tel}
        </div>
      ))}
      <button type="button" onClick={() => list.splice(list.length - 1, 1)}>
        teste
      </button>
    </Container>
  );
};

export default List;
