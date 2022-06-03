import React from 'react';
import Loading from '../common/Loading';
import MainVideoList from './MainVideoList';

function MainCategoryVideoResult({ state, data, error }) {
  console.log('>>state', state);
  switch (state) {
    case 'LOADING':
      return <Loading />;
    case 'ERROR':
      return <div>에러가 났어요뮤ㅠ</div>;
    default:
      return <MainVideoList data={data} />;
  }
}

export default MainCategoryVideoResult;
