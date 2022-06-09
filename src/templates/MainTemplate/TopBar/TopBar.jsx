import { MenuLink, SearchBar, TopBarWrapper } from './TopBar.styles';
import GithubIcon from '../../../assets/GithubIcon.svg';

const TopBar = () => {
  return (
    <TopBarWrapper>
      <SearchBar></SearchBar>
      <MenuLink to="/">
        <img src={GithubIcon} alt="" />
      </MenuLink>
    </TopBarWrapper>
  );
};

export default TopBar;
