import React, { useState } from 'react';
import styled from 'styled-components';
import MainTagList from '../component/common/TagList';
import MainVideo from '../component/main/MainVideo';
import { mainVideoData } from '../mock-data';

function Main() {
  const [currentType, setCurrentType] = useState('동물');

  return (
    <Styled.Root>
      <MainTagList setCurrentType={setCurrentType} currentType={currentType} pageType="main" />
      <MainVideo data={mainVideoData} />
    </Styled.Root>
  );
}

export default Main;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100%;
  `,
};
