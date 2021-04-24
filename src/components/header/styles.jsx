import styled from 'styled-components';

import Search from '../../assets/ic-search.svg';

export const Container = styled.nav`
  grid-area: 'HD';
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 0px 16px;
`;

export const LogoImg = styled.img`
  height: 32px;
  width: 148px;
`;

export const SearchBar = styled.input`
  width: 1032px;
  height: 32px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  padding-left: 10px;
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: 99%;

  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.third};
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.colors.third};
  }
`;
