import styled from 'styled-components';

export const BookItemWrapper = styled.div`
  width: 450px;
  height: 250px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.4);
  padding: 2rem;
`;

export const BookThumnbnail = styled.div`
  width: 125px;
  height: 185px;
  background: ${({ theme, src }) => (src ? `url("${src}") center/cover no-repeat` : theme.colors.grey)};
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;

export const BookContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
  padding: 0 1rem;
  position: relative;
`;

export const BookTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  width: 100%;
  padding: 0 0 2rem 0;
`;

export const BookDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: left;
  width: 100%;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const BookReadButton = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.black};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  position: absolute;
  bottom: 0;

  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
