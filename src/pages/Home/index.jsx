/* eslint-disable no-undef */
import React from 'react';

import Header from '../../components/header/index';
import Content from '../../components/content/index';
import { Options } from '../../contexts/EditDelete/index';
import Container from './styles';

const Home = () => (
  <Options>
    <Container>
      <Header />
      <Content />
    </Container>
  </Options>
);

export default Home;
