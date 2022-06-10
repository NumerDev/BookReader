import { ContentTitle, ContentGrid } from './BookList.styles';
import BookItem from '../../components/BookItem/BookItem';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const BookList = () => {
  const [fetchBooksData] = useFetchBooks();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const context = useContext(SearchContext);

  useEffect(() => {
    (async () => {
      const fetchedData = await fetchBooksData(page);
      setData(fetchedData);
      context.value == [] ? null : setData(context.value.data.results);
    })();
  }, [page, context.value]);

  return (
    <>
      <ContentTitle>Books</ContentTitle>
      {/* <button onClick={() => setPage(page + 1)}>Next page</button> */} {/* TODO pagination */}
      <ContentGrid>{data.length > 0 ? data.map((book, idx) => <BookItem key={idx} book={book} id={idx} />) : <div>Loading...</div>}</ContentGrid>
    </>
  );
};

export default BookList;
