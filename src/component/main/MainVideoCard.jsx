import React from 'react';
import VideoDiscription from '../common/VideoDiscription';
import styled from 'styled-components';

/*
interface MainVideoCardProps{
    videoThumbnail: string;
    duration?: string
    userThumbnail?: string;
    title: string;
    user: string;
    views: number;
    timeAgo: string
}
*/

function MainVideoCard({ data, ...props }) {
  return (
    <Styled.Root {...props}>
      <Styled.VideoBox>
        <Styled.Video src={data?.thumbnail} alt="비디오 썸네일" />
        <Styled.DurationBox>{data?.length}</Styled.DurationBox>
      </Styled.VideoBox>
      <VideoDiscription
        userThumbnail={data?.thumbnail}
        title={data?.title}
        user={data?.uploaderId}
        views={data?.watches}
        timeAgo={data?.timeAgo}
      />
    </Styled.Root>
  );
}

export default MainVideoCard;

const Styled = {
  Root: styled.li`
    /* height: fit-content; */
    /* min-width: 29.1rem; */
    cursor: pointer;
    /* flex-grow: 1; */
  `,
  VideoBox: styled.div`
    position: relative;
    height: 16.3rem;
    width: 29.1rem;
    width: 100%;
    background: ${({ theme }) => theme.color.default_grey};
    margin-bottom: 1.3rem;
  `,
  Video: styled.img`
    height: 16.3rem;
    width: 29.1rem;
    /* width: 100%; */
  `,
  DurationBox: styled.div`
    background: ${({ theme }) => theme.color.black};
    color: white;
    width: 4rem;
    height: 1.6rem;
    display: flex;
    flex-direction: center;
    justify-content: center;
    position: absolute;
    top: 14.3rem;
    left: 24.8rem;
  `,
};
