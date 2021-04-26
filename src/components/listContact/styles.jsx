import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-rows: 40px;
  border-radius: 4px;
  width: 1408px;
  border: solid 1px ${(props) => props.theme.content.border};
  background-color: ${(props) => props.theme.content.white};
`;

export const Contacts = styled.div`
  grid-template-columns: 42px 387px 485px 418px 72px;
  display: grid;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
  border-top: solid 1px ${(props) => props.theme.content.border};

  :hover {
    background-color: ${(props) => props.theme.content.primary};
  }
`;

export const Icon = styled.div`
  justify-content: center;
  height: 24px;
  width: 24px;
  align-items: center;
  font-weight: normal;
  font-stretch: normal;
  margin-left: 8px;
  border-radius: 20px;
  font-size: 16px;
  display: flex;
  color: white;
  background-color: ${(props) => props.color};
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  > img {
    height: 16px;
    width: 16px;
    cursor: pointer;
  }
  > img:nth-child(1) {
    margin-right: 24px;
  }
`;
