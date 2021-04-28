import React from 'react';

import Header from '../../components/header/index';
import Content from '../../components/content/index';
import { Options } from '../../contexts/EditDelete/index';
import { SearchContext } from '../../contexts/SearchBar/index';
import Container from './styles';

const Home = () => (
  <SearchContext>
    <Options>
      <Container>
        <Header />
        <Content />
      </Container>
    </Options>
  </SearchContext>
);

export default Home;
