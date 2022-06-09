import { ContentTitle, ContentGrid } from './BookList.styles';
import BookItem from '../components/BookItem/BookItem';
import { useFetchBooks } from '../hooks/useFetchBooks';
import { useEffect } from 'react';
import { useState } from 'react';

const BookList = () => {
  const [books, fetchBooksData] = useFetchBooks();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedData = await fetchBooksData(523);
      await setData(fetchedData);
    })();
  }, []);
  return (
    <>
      <ContentTitle>Books</ContentTitle>
      <ContentGrid>
        {data.length > 0 ? data.map((book, idx) => <BookItem key={idx} book={book} id={idx} />) : <div>Loading...</div>}

        {/* <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem> */}
      </ContentGrid>
    </>
  );
};

export default BookList;
