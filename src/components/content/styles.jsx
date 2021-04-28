import styled from 'styled-components';

const Container = styled.nav`
  grid-area: 'CT';
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1440px) {
    padding-left: 0px;
    padding-right: 12px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  @media (max-width: 1280px) {
    padding-right: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export default Container;
