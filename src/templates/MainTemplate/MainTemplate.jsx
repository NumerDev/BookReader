import { ContentWrapper, TemplateWrapper } from './MainTemplate.styles';
import { Link } from 'react-router-dom';
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';

const MainTemplate = ({ children }) => {
  return (
    <TemplateWrapper>
      <SideBar />
      <TopBar />
      <ContentWrapper>{children}</ContentWrapper>
    </TemplateWrapper>
  );
};

export default MainTemplate;
