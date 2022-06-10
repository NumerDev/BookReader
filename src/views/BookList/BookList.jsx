import { ContentTitle, ContentGrid, ContentMenuButton, ContentMenu, ContentMenuButtonWrapper } from './BookList.styles';
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
      <ContentMenu>
        <ContentTitle>Books</ContentTitle>
        <ContentMenuButtonWrapper>
          <ContentMenuButton
            onClick={() => {
              if (page > 1) {
                setData([]);
                setPage(page - 1);
              }
            }}
          >
            Prev
          </ContentMenuButton>
          <ContentMenuButton
            onClick={() => {
              setData([]);
              setPage(page + 1);
            }}
          >
            Next
          </ContentMenuButton>
        </ContentMenuButtonWrapper>
      </ContentMenu>

      <ContentGrid>{data.length > 0 ? data.map((book, idx) => <BookItem key={idx} book={book} id={idx} />) : <div>Loading...</div>}</ContentGrid>
    </>
  );
};

export default BookList;
