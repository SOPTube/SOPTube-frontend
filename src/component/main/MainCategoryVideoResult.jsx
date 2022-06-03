import React from 'react';
import MainVideoList from './MainVideoList';

function MainCategoryVideoResult({ state, data, error }) {
  console.log('>>data', data);
  switch (state) {
    case 'LOADING':
      return <div>로딩중 입니다</div>;
    case 'ERROR':
      return <div>에러가 났어요뮤ㅠ</div>;
    default:
      return <MainVideoList data={data} />;
  }
}

export default MainCategoryVideoResult;
