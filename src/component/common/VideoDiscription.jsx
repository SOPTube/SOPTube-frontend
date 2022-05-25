import React from 'react';
import styled from 'styled-components';

/*
interface VideoDiscriptionProps{
    userThumbnail?:string,
    title: string,
    user: string,
    views: string,
    timeAgo: string
}
*/
function VideoDiscription({ userTumbnail, title, channel, view, timeAgo }) {
  return (
    <Styled.Root>
      {userTumbnail && <Styled.Thumbnail src={userTumbnail} alt="유저 썸네일" />}
      <Styled.Description>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Channel>{channel}</Styled.Channel>
        <Styled.MoreInformation>
          <span>조회수 {view}회</span>
          <span>{timeAgo}</span>
        </Styled.MoreInformation>
      </Styled.Description>
    </Styled.Root>
  );
}

export default VideoDiscription;

const Styled = {
  Root: styled.div``,
  Thumbnail: styled.img``,
  Description: styled.div``,
  Title: styled.h3``,
  Chnnel: styled.p``,
  MoreInformation: styled.p``,
};
