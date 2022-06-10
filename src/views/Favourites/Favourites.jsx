import { useEffect } from 'react';
import { useState } from 'react';
import BookItem from '../../components/BookItem/BookItem';
import { useFavourite } from '../../hooks/useFavourite';
import { ContentGrid, ContentTitle, ContentMenu, ContentMenuButtonWrapper, ContentMenuButton } from '../BookList/BookList.styles';

const Favourites = () => {
  const [addFavourite, getFavourite] = useFavourite();
  const [favBooks, setFavBooks] = useState([]);

  useEffect(() => {
    const x = getFavourite();
    setFavBooks(getFavourite());
  }, []);
  return (
    <>
      {/* {getFavourite() && getFavourite().map((book, idx) => <BookItem key={idx} book={book} />)} */}
      <ContentMenu>
        <ContentTitle>Favourites</ContentTitle>
        <ContentMenuButtonWrapper>
          <ContentMenuButton
            onClick={() => {
              window.localStorage.clear();
              setFavBooks([]);
            }}
          >
            Clear All
          </ContentMenuButton>
        </ContentMenuButtonWrapper>
      </ContentMenu>
      <ContentGrid>{favBooks && favBooks.length > 0 ? favBooks.map((book, idx) => <BookItem key={idx} book={book} />) : null}</ContentGrid>
    </>
  );
};
export default Favourites;
