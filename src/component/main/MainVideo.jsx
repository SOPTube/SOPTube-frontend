import React from 'react';
import styled from 'styled-components';
import MainVideoCard from './MainVideoCard';

function MainVideo({ data }) {
  return (
    <Styled.Root>
      {data?.map((item) => (
        <MainVideoCard key={item?.videoId} data={item} />
      ))}
    </Styled.Root>
  );
}

export default MainVideo;

const Styled = {
  Root: styled.ul`
    width: 83%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 6.8rem 1.5rem;
  `,
};
