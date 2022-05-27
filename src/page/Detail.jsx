import React, { useState } from 'react';
import styled from 'styled-components';
import TagList from '../component/common/TagList';
import DetailVideo from '../component/detail/DetailVideo';
import MainVideo from '../component/detail/MainVideo';
import { detailVideoData } from '../mock-data';

function Detail() {
  const [currentType, setCurrentType] = useState('모두');
  return (
    <Styled.Root>
      <MainVideo />
      <div>
        <TagList setCurrentType={setCurrentType} currentType={currentType} pageType="detail" />
        <DetailVideo data={detailVideoData} />
      </div>
    </Styled.Root>
  );
}

export default Detail;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
  `,
};
