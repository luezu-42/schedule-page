import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-rows: 40px;
  border-radius: 4px;
  width: 1408px;
  border: solid 1px ${(props) => props.theme.content.border};
  background-color: ${(props) => props.theme.content.white};
`;

export const Contacts = styled.div``;
