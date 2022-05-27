import React, { useState } from 'react';
import styled from 'styled-components';
import TagList from '../component/common/TagList';
import MainVideoList from '../component/main/MainVideoList';
import Sidebar from '../component/main/Sidebar';
import { mainVideoData } from '../mock-data';
import Header from '../component/Header';

function Main() {
  const [currentType, setCurrentType] = useState('동물');

  return (
    <Styled.Root>
      <Header />
      <Sidebar />
      <div>
        <TagList setCurrentType={setCurrentType} currentType={currentType} pageType="main" />
        <MainVideoList data={mainVideoData} />
      </div>
    </Styled.Root>
  );
}

export default Main;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
  `,
};
