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

function MainVideoCard({ data }) {
  return (
    <Styled.Root>
      <Styled.VideoBox>
        <Styled.Video src={data?.videoThumbnail} alt="비디오 썸네일" />
        <Styled.DurationBox>{data?.duration}</Styled.DurationBox>
      </Styled.VideoBox>
      <VideoDiscription
        userThumbnail={data?.userThumbnail}
        title={data?.title}
        user={data?.user}
        views={data?.views}
        timeAgo={data?.timeAgo}
      />
    </Styled.Root>
  );
}

export default MainVideoCard;

const Styled = {
  Root: styled.li`
    height: fit-content;
    width: 29.1rem;
  `,
  VideoBox: styled.div`
    position: relative;
  `,
  Video: styled.img`
    height: 16.3rem;
    width: 100%;
    background: ${({ theme }) => theme.color.default_grey};
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
