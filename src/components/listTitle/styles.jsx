import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 42px 387px 485px 418px 72px;
  color: ${(props) => props.theme.colors.third};
  font-size: 13px;
  font-weight: 500;
  padding-bottom: 7px;
  > div {
    margin-top: 16px;
  }
  @media (max-width: 1440px) {
    grid-template-columns: 42px 310px 360px 400px 60px;
  }
`;

export default Container;
