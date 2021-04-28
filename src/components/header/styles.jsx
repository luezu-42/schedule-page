import styled from 'styled-components';

import Search from '../../assets/ic-search.svg';

export const Container = styled.nav`
  grid-area: 'HD';
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 0px 16px;
  z-index: 300;
`;

export const LogoImg = styled.img`
  height: 32px;
  width: 148px;
  @media (max-width: 1440px) {
    margin-right: 20px;
  }
`;

export const SearchBar = styled.div`
  width: 1032px;
  height: 32px;
  color: ${(props) => props.theme.colors.third};
  > input {
    width: 1032px;
    height: 32px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 4px;
    padding-left: 10px;
    background-image: url(${Search});
    background-repeat: no-repeat;
    background-position: 99%;
    :focus {
      background-color: ${(props) => props.theme.content.white};
      border: solid 1px lightgray;
      border-radius: 5px 5px 0px 0px;
    }
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.colors.third};
    }
    :-ms-input-placeholder {
      color: ${(props) => props.theme.colors.third};
    }
  }
  @media (max-width: 1440px) {
    > input {
      width: 932px;
      margin-left: 55px;
    }
  }
`;

export const Contact = styled.div`
  display: ${(props) => props.display};
  align-items: center;
  padding: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.content.white};
  border-left: solid 1px lightgray;
  border-bottom: solid 1px lightgray;
  border-right: solid 1px lightgray;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :last-child {
    border-radius: 0px 0px 5px 5px;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
  @media (max-width: 1440px) {
    width: 932px;
    margin-left: 55px;
  }
`;

export const Icon = styled.div`
  justify-content: center;
  height: 22px;
  width: 22px;
  align-items: center;
  font-weight: normal;
  font-stretch: normal;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  color: white;
  background-color: ${(props) => props.color};
`;
