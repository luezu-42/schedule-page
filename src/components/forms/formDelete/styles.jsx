import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0px;
  left: 0px;
  position: absolute;
  display: ${(props) => props.display};
  justify-content: center;
`;

export const FormDelete = styled.div`
  width: 432px;
  height: 207px;
  border-radius: 16px;
  background-color: #ffffff;
  margin-top: 234px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  > div {
    margin: 16px;
    font-weight: 500;
    font-size: 14px;
    color: ${(props) => props.theme.colors.dark};
  }
  > div:nth-child(1) {
    font-weight: 500;
    font-size: 16px;
  }
  > div:nth-child(1)::after {
    content: '';
    display: block;
    height: 2px;
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-top: 12.5px;
    background-color: ${(props) => props.theme.colors.gray};
  }
  > div:nth-child(2)::after {
    content: '';
    display: block;
    height: 2px;
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-top: 45px;
    background-color: ${(props) => props.theme.colors.gray};
  }
  #bnt-fix {
    display: flex;
    justify-content: flex-end;
    margin-right: 16px;
    margin-bottom: 16px;
  }
  > #bnt-fix button:nth-child(2) {
    margin-left: 16px;
  }
`;
