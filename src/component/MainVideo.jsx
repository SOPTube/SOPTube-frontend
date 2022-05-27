import React from 'react';
import styled from 'styled-components';
import likedSrc from '../assets/icon/icn_likedVideos.png';
import dislikedSrc from '../assets/icon/icn_disliked.png';
import shareSrc from '../assets/icon/icn_share.png';
import clipSrc from '../assets/icon/icn_clip.png';
import saveSrc from '../assets/icon/icn_save.png';
import moreSrc from '../assets/icon/icn_more.png';

export default function MainVideo() {
  return (
    <MainVideoWrapper>
      <MainVideoImg />
      <VideoDetails>
        <VideoHashTags>#해시태그 #해시태그</VideoHashTags>
        <VideoTitle>제목을 입력하세요.</VideoTitle>
        <VideoMoreDetails>
          <ViewsAndUploadedTime>
            <Views>조회수 13회•</Views>
            <UploadedTime>2022년 05월 06일</UploadedTime>
          </ViewsAndUploadedTime>
          <ButtonsContainer>
            <ButtonConatiner>
              <FlexImg src={likedSrc} />
              132
            </ButtonConatiner>
            <ButtonConatiner>
              <FlexImg src={dislikedSrc} />
              싫어요
            </ButtonConatiner>
            <ButtonConatiner>
              <FlexImg src={shareSrc} />
              공유
            </ButtonConatiner>
            <ButtonConatiner>
              <FlexImg src={clipSrc} />
              클립
            </ButtonConatiner>
            <ButtonConatiner>
              <FlexImg src={saveSrc} />
              저장
            </ButtonConatiner>
            <ButtonConatiner>
              <FlexImg src={moreSrc} />
            </ButtonConatiner>
          </ButtonsContainer>
        </VideoMoreDetails>
      </VideoDetails>
      <VideoChannel>
        <ChannelImg />
        <ChannelContent>
          <ChannelName>배고픈1조들</ChannelName>
          <Subscribers>구독자 1027명</Subscribers>
          <WrittenContent>내용을 입력하시오...</WrittenContent>
          <WrittenHashTags>#엠티중 #배고파 #밥언제먹지</WrittenHashTags>
        </ChannelContent>
      </VideoChannel>
    </MainVideoWrapper>
  );
}

const MainVideoWrapper = styled.article`
  width: 106.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.2rem;
  gap: 1.5rem;
`;

const MainVideoImg = styled.img`
  width: 100%;
  height: 57.9rem;
  background-color: ${({ theme }) => theme.color.default_grey};
`;

const VideoDetails = styled.section`
  width: 100%;
  height: 9.2rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.color.light_grey_02};
`;

const VideoHashTags = styled.div`
  width: 100%;
  height: 1.6rem;
  color: ${({ theme }) => theme.color.point_blue};
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.6rem;
  margin-bottom: 0.2rem;
`;

const VideoTitle = styled.h1`
  width: 100%;
  height: 2.3rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  margin-bottom: 1.3rem;
`;

const VideoMoreDetails = styled.div`
  height: 3.8rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.2rem;
`;

const ViewsAndUploadedTime = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.color.grey_01};
  display: flex;
`;

const Views = styled.div``;

const UploadedTime = styled.div``;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ButtonConatiner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const FlexImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const VideoChannel = styled.section`
  width: 100%;
  height: 24.1rem;
  display: flex;
  padding-top: 1.6rem;
  gap: 1.5rem;
`;

const ChannelImg = styled.img`
  width: 4.9rem;
  height: 4.9rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.default_grey};
`;

const ChannelContent = styled.div`
  width: calc(100% - 4.9rem - 1.5rem);
  display: flex;
  flex-direction: column;
`;

const ChannelName = styled.h2`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 0.6rem;
`;

const Subscribers = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.7rem;
  margin-bottom: 1.4rem;
  color: ${({ theme }) => theme.color.grey_01};
`;

const WrittenContent = styled.div`
  width: 58.1rem;
  height: 9.5rem;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.9rem;
  margin-bottom: 1rem;
`;

const WrittenHashTags = styled.div`
  width: 100%;
  height: 1.9rem;
  color: ${({ theme }) => theme.color.point_blue};
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.9rem;
  margin-bottom: 6rem;
`;
