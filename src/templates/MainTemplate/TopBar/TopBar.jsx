import { MenuLink, SearchBar, TopBarWrapper } from './TopBar.styles';

const TopBar = () => {
  return (
    <TopBarWrapper>
      <SearchBar></SearchBar>
      <MenuLink to="/">GH</MenuLink>
    </TopBarWrapper>
  );
};

export default TopBar;
