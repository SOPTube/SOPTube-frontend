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
    views: string;
    timeAgo: string
}
*/
function MainVideoCard({ videoThumbnail, duration, userTumbnail, title, user, views, timeAgo }) {
  return (
    <Styled.Root>
      <Styled.Video src={videoThumbnail} alt="비디오 썸네일">
        <div className="video__duration">{duration}</div>
      </Styled.Video>
      <VideoDiscription
        userTumbnail={userTumbnail}
        title={title}
        user={user}
        views={views}
        timeAgo={timeAgo}
      />
    </Styled.Root>
  );
}

export default MainVideoCard;

const Styled = {
  Root: styled.li``,
  Video: styled.img``,
};
