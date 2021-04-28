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
  z-index: 1000;
`;

export const FormContact = styled.form`
  width: 432px;
  height: 342px;
  border-radius: 16px;
  background-color: #ffffff;
  margin-top: 234px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);

  > div {
    margin: 16px;
    font-weight: 500;
    font-size: 14px;
    color: ${(props) => props.theme.colors.dark};
  }

  > div:after {
    content: '';
    display: block;
    height: 2px;
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-top: 12.5px;
    background-color: ${(props) => props.theme.colors.gray};
  }

  > span input {
    height: 30px;
    flex-direction: column;
    display: flex;
    margin: 0px 24px;
    border-radius: 4px;
    border: solid 1px ${(props) => props.theme.colors.gray};
  }
  > span label {
    margin: 0px 24px;
  }
  > #bnt-fix {
    display: flex;
    justify-content: flex-end;
    margin-right: 16px;
    margin-bottom: 16px;
  }
  > #bnt-fix button:nth-child(2) {
    margin-left: 16px;
  }
  > span label:nth-child(3):after {
    content: '';
    display: block;
    height: 2px;
    width: calc(100%);
    margin-top: 22px;
    margin-bottom: -12px;
    background-color: ${(props) => props.theme.colors.gray};
  }

  > span input:nth-child(1) {
    margin-bottom: 16px;
    margin-top: 4px;
  }
  > span input:nth-child(2) {
    margin-bottom: 14px;
    margin-top: 4px;
  }
  > span input:nth-child(3) {
    margin-top: 4px;
  }
  > span label:nth-child(1) input {
    width: calc(100% - 48px);
  }
  > span label:nth-child(2) input {
    width: calc(100% - 48px);
  }
  > span label:nth-child(3) input {
    width: 128px;
  }
`;
