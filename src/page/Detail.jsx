import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/common/Header';
import TagList from '../component/common/TagList';
import DetailVideo from '../component/detail/DetailVideo';
import MainVideo from '../component/detail/MainVideo';
import { detailVideoData } from '../mock-data';

function Detail() {
  const [currentType, setCurrentType] = useState('모두');
  return (
    <Styled.Root>
      <Header />
      <Styled.Main>
        <MainVideo />
        <div>
          <TagList setCurrentType={setCurrentType} currentType={currentType} pageType="detail" />
          <DetailVideo data={detailVideoData} />
        </div>
      </Styled.Main>
    </Styled.Root>
  );
}

export default Detail;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100%;
  `,
  Main: styled.main`
    margin-top: 5.5rem;
    display: flex;
  `,
};
