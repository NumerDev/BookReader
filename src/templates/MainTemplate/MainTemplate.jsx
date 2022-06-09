import { TemplateWrapper } from './MainTemplate.styles';
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';
import TemplateContentWrapper from './ConentWrapper/ContentWrapper';

const MainTemplate = ({ children }) => {
  return (
    <TemplateWrapper>
      <SideBar />
      <TopBar />
      <TemplateContentWrapper>{children}</TemplateContentWrapper>
    </TemplateWrapper>
  );
};

export default MainTemplate;
