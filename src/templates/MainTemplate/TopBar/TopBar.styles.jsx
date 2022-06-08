import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopBarWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px 20px 0 0;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 50px;
  align-items: center;
`;

export const MenuLink = styled(Link)`
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.l : theme.fontSize.m)};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  margin-left: 2rem;
  padding: 0 3rem;
`;

export const SearchBar = styled.input.attrs({ type: 'text' })`
  width: 500px;
  height: 50px;
  border-radius: 15px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2);
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 1rem;

  &:focus {
    outline: none;
  }
`;
