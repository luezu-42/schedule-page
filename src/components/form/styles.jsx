import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0px;
  position: absolute;
  display: ${(props) => props.display};
  justify-content: center;
`;

export const FormContact = styled.form`
  width: 432px;
  height: 342px;
  border-radius: 16px;
  background-color: #ffffff;
  margin-top: 234px;
`;
