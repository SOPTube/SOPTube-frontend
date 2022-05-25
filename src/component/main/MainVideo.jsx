import React from 'react';
import styled from 'styled-components';
import MainVideoCard from './MainVideoCard';

function MainVideo(data) {
  return (
    <Styled.Root>
      {data?.map(() => (
        <MainVideoCard key={data?.videId} data={data} />
      ))}
    </Styled.Root>
  );
}

export default MainVideo;

const Styled = {
  Root: styled.ul``,
};
