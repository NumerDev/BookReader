import { SideBarWrapper, StyledLink } from './SideBar.styles';
import BookIcon from '../../../assets/BookIcon.svg';
import HeartIcon from '../../../assets/HeartIcon.svg';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <StyledLink to="/">
        <img src={BookIcon} />
        All Books
      </StyledLink>
      <StyledLink to="b">
        <img src={HeartIcon} />
        Favourite
      </StyledLink>
    </SideBarWrapper>
  );
};

export default SideBar;
