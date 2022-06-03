import React from 'react';
import DetailVideo from './DetailVideo';

function RecommendVideoResult({ status, data, error }) {
  switch (status) {
    case 'LOADING':
      return <div>로딩중 입니다..</div>;
    case 'COMPLETE':
      return <DetailVideo data={data} />;
    default:
      return <div>에러가 났어요ㅠㅠ</div>;
  }
}

export default RecommendVideoResult;
