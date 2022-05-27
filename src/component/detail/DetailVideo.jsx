import React from 'react';
import styled from 'styled-components';
import DetailVideoCard from './DetailVideoCard';

function DetailVideo({ data }) {
  return (
    <Styled.Root>
      {data?.map((item) => (
        <DetailVideoCard key={item?.videoId} data={item} />
      ))}
    </Styled.Root>
  );
}

export default DetailVideo;

const Styled = {
  Root: styled.ul`
    width: 26%;
    height: 100%;
  `,
};
