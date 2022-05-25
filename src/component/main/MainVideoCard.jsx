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
// videoThumbnail, duration, userThumbnail, title, user, views, timeAgo
function MainVideoCard({ data }) {
  console.log('[>>>data', data);
  return (
    <Styled.Root>
      <Styled.Video src={data?.videoThumbnail} alt="비디오 썸네일" />
      <Styled.DurationBox>{data?.duration}</Styled.DurationBox>
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
  Root: styled.li``,
  Video: styled.img``,
  DurationBox: styled.div``,
};
