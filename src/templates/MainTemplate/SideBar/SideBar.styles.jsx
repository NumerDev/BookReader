import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideBarWrapper = styled.div`
  padding-left: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px 0 0 20px;
  min-width:200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledLink = styled(NavLink).attrs({ activeclassname: 'activeLink' })`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 15px 0;
  text-align: center;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &.active {
    font-weight: bold;
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    content: '';
    position: absolute;
    width: 10px;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 10px 0 0 10px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Logo = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  padding: 30px 0 60px 0;
`;
