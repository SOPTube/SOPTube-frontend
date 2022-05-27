import React from 'react';
import styled from 'styled-components';
import VideoDiscription from '../common/VideoDiscription';

function DetailVideoCard({ data }) {
  return (
    <Styled.Root>
      <Styled.Video src={data?.videoThumbnail} alt="비디오 썸네일" />
      <VideoDiscription
        title={data?.title}
        user={data?.user}
        views={data?.views}
        timeAgo={data?.timeAgo}
      />
    </Styled.Root>
  );
}

export default DetailVideoCard;

const Styled = {
  Root: styled.li`
    display: flex;
    width: 39.8rem;
    height: 9.7rem;
    margin-bottom: 1.1rem;
  `,
  Video: styled.img`
    width: 17.3rem;
    height: 9.7rem;
    margin-right: 0.8rem;
  `,
};
