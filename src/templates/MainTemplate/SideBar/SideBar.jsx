import { SideBarWrapper, StyledLink, Logo } from './SideBar.styles';
import BookIcon from '../../../assets/BookIcon.svg';
import HeartIcon from '../../../assets/HeartIcon.svg';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Logo>BookReader</Logo>
      <StyledLink to="/">
        <img src={BookIcon} />
        All Books
      </StyledLink>
      <StyledLink to="favourites">
        <img src={HeartIcon} />
        Favourite
      </StyledLink>
    </SideBarWrapper>
  );
};

export default SideBar;
