import styled from 'styled-components';

export const ContentTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  padding: 50px 100px;
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
