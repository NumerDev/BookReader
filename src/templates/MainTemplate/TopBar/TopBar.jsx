import { MenuLink, SearchBar, TopBarWrapper } from './TopBar.styles';
import GithubIcon from '../../../assets/GithubIcon.svg';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { useFetchBooks } from '../../../hooks/useFetchBooks';

const TopBar = () => {
  const searchBar = useRef('');
  const [fetchBooksData, fetchCertainBook, findBooks] = useFetchBooks();
  const [test, setTest] = useState('');

  useEffect(() => {
    debounce(async () => {
      const bookData = await findBooks(test);
      console.log(test, bookData);
    }, 500)();
  }, [test]);

  const handleChange = debounce(async (e) => {
    searchBar.current.value = e.target.value;
    setTest(e.target.value);
  }, 500);

  return (
    <TopBarWrapper>
      <SearchBar ref={searchBar} placeholder="Search..." onChange={(e) => handleChange(e)}></SearchBar>
      <MenuLink to="/">
        <img src={GithubIcon} alt="" />
      </MenuLink>
    </TopBarWrapper>
  );
};

export default TopBar;
