import { GlobalStyle } from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import BookList from './BookList';
import BookDetails from './BookDetails';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route exact path="/" element={<BookList />} />
            <Route exact path="book/:id" element={<BookDetails />} />
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
