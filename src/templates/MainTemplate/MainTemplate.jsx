import { TemplateWrapper } from './MainTemplate.styles';
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';
import TemplateContentWrapper from './ConentWrapper/ContentWrapper';
import { SearchContext } from '../../context/SearchContext';
import { useState } from 'react';

const MainTemplate = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  return (
    <SearchContext.Provider value={{ value: bookData, setValue: setBookData }}>
      <TemplateWrapper>
        <SideBar />
        <TopBar />
        <TemplateContentWrapper>{children}</TemplateContentWrapper>
      </TemplateWrapper>
    </SearchContext.Provider>
  );
};

export default MainTemplate;
