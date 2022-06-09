import { ContentTitle, ContentGrid } from './BookList.styles';
import BookItem from '../../components/BookItem/BookItem';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import { useEffect } from 'react';
import { useState } from 'react';

const BookList = () => {
  const [fetchBooksData] = useFetchBooks();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const fetchedData = await fetchBooksData(page);
      await setData(fetchedData);
    })();
  }, [page]);
  return (
    <>
      <ContentTitle>Books</ContentTitle>
      {/* <button onClick={() => setPage(page + 1)}>Next page</button> */} {/* TODO pagination */}
      <ContentGrid>{data.length > 0 ? data.map((book, idx) => <BookItem key={idx} book={book} id={idx} />) : <div>Loading...</div>}</ContentGrid>
    </>
  );
};

export default BookList;
