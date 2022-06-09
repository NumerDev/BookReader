import { BookItemWrapper } from './BookItem.styles';
import { BookThumnbnail, BookContentWrapper, BookTitle, BookReadButton, BookDescription } from './BookItem.styles';

const BookItem = ({ book: { id, title, languages, resources } }) => {
  return (
    <BookItemWrapper>
      <BookThumnbnail src={resources.find((e) => e.uri.includes('medium.jpg'))?.uri} />

      <BookContentWrapper>
        <BookTitle>{title}</BookTitle>
        <BookDescription>Languages: {languages}</BookDescription>
        <BookReadButton to={`book/${id}`}>Read</BookReadButton>
      </BookContentWrapper>
    </BookItemWrapper>
  );
};

export default BookItem;
