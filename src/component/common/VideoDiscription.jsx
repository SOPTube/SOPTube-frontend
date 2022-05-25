import React from 'react';
import styled from 'styled-components';

/*
interface VideoDiscriptionProps{
    userThumbnail?:string,
    title: string,
    user: string,
    viewss: string,
    timeAgo: string
}
*/
function VideoDiscription({ userThumbnail, title, user, views, timeAgo }) {
  console.log('description에 들어온 애들', userThumbnail, title, user, views, timeAgo);
  return (
    <Styled.Root>
      {userThumbnail && <Styled.Thumbnail src={userThumbnail} alt="유저 썸네일" />}
      <Styled.Description>
        <Styled.Title>{title}</Styled.Title>
        <Styled.User>{user}</Styled.User>
        <Styled.MoreInformation>
          <span>조회수 {views}회</span>
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
  User: styled.p``,
  MoreInformation: styled.p``,
};
