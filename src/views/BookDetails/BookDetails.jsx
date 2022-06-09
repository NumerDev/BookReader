import { BookDetailsWrapper } from './BookDetails.styles';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import { useFavourite } from '../../hooks/useFavourite';
import StarIcon from '../../assets/StarIcon.svg';
import {
  BookDetailsHeader,
  BookTitle,
  BookAuthorWrapper,
  BookAuthorHeader,
  BookAuthorContent,
  BookContent,
  BookContentIframe,
  BookAddFavourite,
} from './BookDetails.styles';

const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState([]);
  const [fetchBooksData, fetchCertainBook] = useFetchBooks();
  const { title, agents, resources, languages } = bookDetails;
  const [addFavourite] = useFavourite();

  useEffect(() => {
    (async () => {
      const bookData = await fetchCertainBook(id);
      return setBookDetails(bookData);
    })();
  }, []);

  return (
    <BookDetailsWrapper>
      <BookDetailsHeader>
        <BookTitle>{title}</BookTitle>
        <BookAuthorWrapper>
          <BookAuthorHeader>Author</BookAuthorHeader>
          <BookAuthorContent>{agents && agents.map((e) => e.person)}</BookAuthorContent>
        </BookAuthorWrapper>
        <BookAddFavourite onClick={() => addFavourite({ title, resources, languages })}>
          <img src={StarIcon} />
        </BookAddFavourite>
      </BookDetailsHeader>
      <BookContent>
        <BookContentIframe src={resources && resources.find((e) => e.uri.includes('.htm'))?.uri}></BookContentIframe>
      </BookContent>
    </BookDetailsWrapper>
  );
};

export default BookDetails;
