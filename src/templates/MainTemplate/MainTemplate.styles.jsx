import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 0 0 20px 0;
`;
