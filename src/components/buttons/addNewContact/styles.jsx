import styled from 'styled-components';

import Plus from '../../../assets/ic-plus.svg';

const Button = styled.button`
  width: 144px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: ${(props) => props.theme.button.primary};
  background-image: url(${Plus});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 12%;
  padding-left: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.button.secondary};
  @media (max-width: 1440px) {
    align-items: center;
    justify-content: center;
    width: 104px;
    height: 35px;
    background-size: 12px;
    font-size: 12px;
  }
`;

export default Button;
