import styled from 'styled-components';

const Button = styled.button`
  text-decoration: none;
  background-color: ${(props) => props.theme.content.white};
  color: ${(props) => props.theme.button.secondary};
  font-weight: 500;
  font-size: 14px;
`;

export default Button;
