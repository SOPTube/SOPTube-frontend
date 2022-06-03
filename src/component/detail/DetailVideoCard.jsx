import React from 'react';
import styled from 'styled-components';
import VideoDiscription from '../common/VideoDiscription';

function DetailVideoCard({ data }) {
  return (
    <Styled.Root>
      <Styled.VideoWrapper>
        <Styled.Video src={data?.thumbnail} alt="비디오 썸네일" />
      </Styled.VideoWrapper>
      <VideoDiscription
        title={data?.title}
        user={data?.uploaderId}
        views={data?.watches}
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
  VideoWrapper: styled.div`
    width: 17.3rem;
    height: 9.7rem;
    margin-right: 0.8rem;
  `,
  Video: styled.img`
    width: 17.3rem;
    height: 9.7rem;
    object-fit: cover;
  `,
};
