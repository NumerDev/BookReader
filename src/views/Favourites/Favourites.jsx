import BookItem from '../../components/BookItem/BookItem';
import { useFavourite } from '../../hooks/useFavourite';
import { ContentGrid, ContentTitle } from '../BookList/BookList.styles';

const Favourites = () => {
  const [addFavourite, getFabourite] = useFavourite();

  return (
    <>
      <ContentTitle>Favourites</ContentTitle>
      <ContentGrid>
        {getFabourite().map((e) => (
          <BookItem key={e.title} book={e} />
        ))}
      </ContentGrid>
    </>
  );
};
export default Favourites;
