import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 0 0 20px 0;
  overflow:hidden;
  height: calc(100vh - 120px);
`;

export const BooksWrapper =styled.div`
  height: 90%;
  
`