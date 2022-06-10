import styled from 'styled-components';

export const ContentTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  padding: 50px 100px;
`;

export const ContentMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentGrid = styled.div`
  display: flex;

  justify-content: center;
  max-height: 80%;
  gap: 20px 20px;
  flex-wrap: wrap;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    /* Chrome, Safari, Opera */
    display: none;
  }
`;
export const ContentMenuButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 50px;
`;

export const ContentMenuButton = styled.button`
  border: none;
  width: 100px;
  height: 30px;
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.5);
  font-family: 'Roboto';

  &:hover {
    transition: all 0.1s ease-in-out;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;
