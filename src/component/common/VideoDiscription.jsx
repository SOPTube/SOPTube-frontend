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
  Root: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: ceters;
    margin-top: 1.3rem;
    width: 23.5rem;
  `,
  Thumbnail: styled.img`
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    margin-right: 1.2rem;
  `,
  Description: styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    width: 28.3rem;
    height: 6.6rem;
  `,
  Title: styled.h3`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 0.9rem;
  `,
  User: styled.p`
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.color.grey_01};
    margin-bottom: 0.2rem;
  `,
  MoreInformation: styled.p`
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.color.grey_01};
    /* &:nth-child(1) {
      background-color: red;
    } */
    span {
      &:nth-child(2)::before {
        content: ' • ';
      }
    }
  `,
};
