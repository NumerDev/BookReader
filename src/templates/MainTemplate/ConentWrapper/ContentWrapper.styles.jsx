import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 0 0 20px 0;
  grid-area: 2 / 2 / 3 / 3;

  height: calc(100vh - 120px);
`;
