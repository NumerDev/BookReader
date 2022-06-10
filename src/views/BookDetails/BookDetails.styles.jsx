import styled from 'styled-components';

export const BookDetailsWrapper = styled.div`
  height: 100%;
  text-shadow: 1px 1px 1px black;
`;

export const BookDetailsHeader = styled.div`
  border-bottom: 5px solid ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 15%;
  display: flex;
`;

export const BookTitle = styled.h2`
  width: 70%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  align-items: center;
`;

export const BookAuthorWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-right: 5px solid ${({ theme }) => theme.colors.lightGrey};
  border-left: 5px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const BookAuthorHeader = styled.h3`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

export const BookAuthorContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const BookAddFavourite = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    cursor: pointer;
    &:hover {
      transition: transform 0.1s ease-in-out;
      transform: scale(1.2);
    }
  }
`;

export const BookContent = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookContentIframe = styled.iframe`
  width: 80%;
  height: 90%;
  border: none;
  background: ${({ theme }) => theme.colors.white};
`;
