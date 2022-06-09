import styled from 'styled-components';

export const BookItemWrapper = styled.div`
  width: 450px;
  height: 250px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center; /* temp */
  align-items: center;
`;
