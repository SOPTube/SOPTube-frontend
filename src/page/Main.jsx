import React, { useState } from 'react';
import styled from 'styled-components';
import TagList from '../component/common/TagList';
import MainVideoList from '../component/main/MainVideoList';
import Sidebar from '../component/main/Sidebar';
import { mainVideoData } from '../mock-data';
import Header from '../component/common/Header';
import { getMainVideoList } from '../lib/getVideoList';
import { useEffect } from 'react';
import { useVideoData } from '../hooks/useVideoData';
import MainCategoryVideoResult from '../component/main/MainCategoryVideoResult';

function Main() {
  const [currentType, setCurrentType] = useState('동물');

  const { state, data, error } = useVideoData({ type: 'mainCategoryData', params: currentType });

  return (
    <Styled.Root>
      <Header />
      <Sidebar />
      <Styled.Main>
        <TagList setCurrentType={setCurrentType} currentType={currentType} pageType="main" />
        {/* <MainVideoList data={mainVideoData} /> */}
        <MainCategoryVideoResult state={state} data={data} error={error} />
      </Styled.Main>
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
  Main: styled.main`
    margin-left: 24rem;
    margin-top: 5.6rem;
    width: 100%;
    ul {
      &:first-child {
        position: fixed;
        z-index: 1;
        min-width: 106.2rem;
        width: 100%;
      }
      &:nth-child(2) {
        margin-top: 5.5rem;
      }
    }
  `,
};
