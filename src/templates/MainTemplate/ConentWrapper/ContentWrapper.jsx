import { ContentWrapper,BooksWrapper } from './ContentWrapper.styles';

const TemplateContentWrapper = ({ children }) => {
  return <ContentWrapper>
    <BooksWrapper>{children}</BooksWrapper></ContentWrapper>;
};

export default TemplateContentWrapper;
