import styled from 'styled-components';

const Button = styled.button`
  width: 72px;
  height: 32px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 14px;
  opacity: ${(props) => (props.opacityValid === true ? 0.5 : 1)};
  background-color: ${(props) => props.theme.button.secondary};
  color: ${(props) => props.theme.content.white};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.16);
`;

export default Button;
