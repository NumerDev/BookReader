import { MenuLink, SearchBar, TopBarWrapper } from './TopBar.styles';
import GithubIcon from '../../../assets/GithubIcon.svg';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { useFetchBooks } from '../../../hooks/useFetchBooks';
import { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';

const TopBar = () => {
  const [fetchBooksData, fetchCertainBook, findBooks] = useFetchBooks();
  const [value, setValue] = useState('');
  const context = useContext(SearchContext);

  const handleChange = async (e) => {
    const keyWord = e.target.value;
    setValue(keyWord);
    const bookData = await findBooks(keyWord);
    e.target.value == '' ? context.setValue([]) : context.setValue(bookData);
  };

  return (
    <TopBarWrapper>
      <SearchBar placeholder="Search..." value={value} onChange={handleChange}></SearchBar>
      <MenuLink to="/">
        <img src={GithubIcon} alt="GitHubIcon" />
      </MenuLink>
    </TopBarWrapper>
  );
};

export default TopBar;
