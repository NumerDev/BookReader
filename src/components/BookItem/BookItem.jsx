import { BookItemWrapper } from './BookItem.styles';
import { BookThumnbnail, BookContentWrapper, BookTitle, BookReadButton, BookDescription } from './BookItem.styles';

const BookItem = () => {
  return (
    <BookItemWrapper>
      <BookThumnbnail src={'https://source.unsplash.com/random/400x300'} />

      <BookContentWrapper>
        <BookTitle>Title of the book</BookTitle>
        <BookDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, soluta?</BookDescription>
        <BookReadButton>Read </BookReadButton>
      </BookContentWrapper>
    </BookItemWrapper>
  );
};

export default BookItem;
