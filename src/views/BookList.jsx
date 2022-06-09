import { ContentTitle, ContentGrid } from './BookList.styles';
import BookItem from '../components/BookItem/BookItem';

const BookList = () => {
  return (
    <>
      <ContentTitle>Books</ContentTitle>
      <ContentGrid>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
      </ContentGrid>
    </>
  );
};

export default BookList;
