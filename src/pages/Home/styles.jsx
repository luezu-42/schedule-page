import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto;
  grid-template-areas:
    'HD'
    'CT';
  height: 100vh;
`;

export default Container;
