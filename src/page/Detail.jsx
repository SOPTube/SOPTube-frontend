import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/common/Header';
import TagList from '../component/common/TagList';
import MainVideo from '../component/detail/MainVideo';
import RecommendVideoResult from '../component/detail/RecommendVideoResult';
import { useVideoData } from '../hooks/useVideoData';

function Detail() {
  const [currentType, setCurrentType] = useState('모두');

  const { status, data, error } = useVideoData({ type: 'recommendedVideo' });

  return (
    <Styled.Root>
      <Header />
      <Styled.Main>
        <MainVideo />
        <Styled.Section>
          <TagList setCurrentType={setCurrentType} currentType={currentType} pageType="detail" />
          <RecommendVideoResult status={status} data={data} error={error} />
        </Styled.Section>
      </Styled.Main>
    </Styled.Root>
  );
}

export default Detail;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
  `,
  Main: styled.main`
    margin-top: 5.6rem;
    display: flex;
  `,
  Section: styled.section`
    ul {
      &:first-child {
        width: 100%;
        min-width: 41rem;
      }
    }
  `,
};
