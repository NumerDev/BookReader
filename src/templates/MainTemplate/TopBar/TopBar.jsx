import { MenuLink, SearchBar, TopBarWrapper } from './TopBar.styles';

const TopBar = () => {
  return (
    <TopBarWrapper>
      <MenuLink isBig="true" to="/">
        BookReader
      </MenuLink>
      <SearchBar></SearchBar>
      <MenuLink to="/">GH</MenuLink>
    </TopBarWrapper>
  );
};

export default TopBar;
