import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import likedSrc from '../../assets/icon/icn_likedVideos.png';
import dislikedSrc from '../../assets/icon/icn_disliked.png';
import shareSrc from '../../assets/icon/icn_share.png';
import clipSrc from '../../assets/icon/icn_clip.png';
import saveSrc from '../../assets/icon/icn_save.png';
import moreSrc from '../../assets/icon/icn_more.png';
import Profile from '../../assets/icon/img_profile.png';
import Profile2 from '../../assets/icon/profile2.png';
import UpOff from '../../assets/icon/ic_up_off.png';
import Profile3 from '../../assets/icon/bear.png';
import Profile4 from '../../assets/icon/fox.png';
import Profile5 from '../../assets/icon/deer.png';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'http://cors-anywhere.herokuapp.com/http://13.209.5.193:8000';

export default function MainVideo() {
  const [comment, setComment] = useState('');
  const [inputValue, setInputValue] = useState('');

  const postComment = async (value) => {
    await axios
      .post(`${BASE_URL}/video/${process.env.REACT_APP_VIDEO_ID}/comment`, {
        writerId: `${process.env.REACT_APP_WRITER_ID}`,
        commentContent: value,
      })
      .then(function (response) {
        console.log(response);
        setComment(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onCheckEnter = (e) => {
    if (e.key === 'Enter') {
      postComment(inputValue);
      console.log(inputValue);
    }
  };
  
  const { state } = useLocation();
  console.log('>>state', state);
  const [mainVideoInfo, setMainVideoInfo] = useState({});

  const getMainVideoInfo = async () => {
    const result = await axios.get(
      `http://cors-anywhere.herokuapp.com/http://13.209.5.193:8000/video/${state}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    setMainVideoInfo(result.data.data);
  };

  useEffect(() => {
    getMainVideoInfo();
  }, []);

  if (!mainVideoInfo._id) return <div>Loading...</div>;

  return (
    <MainVideoWrapper>
      <MainVideoImg src={mainVideoInfo.thumbnail} />
      <VideoDetails>
        <VideoHashTags>#경춘선에있음 #지하철코딩</VideoHashTags>
        <VideoTitle>{mainVideoInfo.title}</VideoTitle>
        <VideoMoreDetails>
          <ViewsAndUploadedTime>
            <Views>조회수 {mainVideoInfo.watches}회•</Views>
            <UploadedTime>{mainVideoInfo.timeAgo}</UploadedTime>
          </ViewsAndUploadedTime>
          <ButtonsContainer>
            <ButtonConatiner>
              <FlexImg src={likedSrc} />
              {mainVideoInfo.likes}
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
        <ChannelImg src={mainVideoInfo.uploaderId.profileImg} />
        <ChannelContent>
          <ChannelName>{mainVideoInfo.uploaderId.name}</ChannelName>
          <Subscribers>구독자 {mainVideoInfo.uploaderId.subscribes}명</Subscribers>
          <WrittenContent>{mainVideoInfo.content}</WrittenContent>
          <WrittenHashTags>#엠티중 #배고파 #밥언제먹지</WrittenHashTags>
        </ChannelContent>
        <SubscribeButton>구독</SubscribeButton>
      </VideoChannel>
      <Styled.Wrapper>
        <Styled.CommentCount>댓글 {mainVideoInfo.comments.length}개</Styled.CommentCount>
        <Styled.AddComment>
          <Styled.ProfileImg src={Profile} />
          <Styled.Input
            type="text"
            placeholder="댓글 추가..."
            onKeyPress={onCheckEnter}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Styled.AddComment>
        <Styled.Comment>
          <Styled.CommentImg src={Profile2} />
          <Styled.CommentWrap>
            <Styled.ProfileName>
              독수리
              <span style={spanStyle}>1일전</span>
            </Styled.ProfileName>
            <Styled.CommentContent>{comment}</Styled.CommentContent>
            <ButtonConatiner>
              <Styled.Ddabong1 src={UpOff} />5
              <Styled.Ddabong2 src={UpOff} />
            </ButtonConatiner>
          </Styled.CommentWrap>
        </Styled.Comment>
        <Styled.Comment>
          <Styled.CommentImg src={Profile2} />
          <Styled.CommentWrap>
            <Styled.ProfileName>
              독수리
              <span style={spanStyle}>1일전</span>
            </Styled.ProfileName>
            <Styled.CommentContent>
              기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤
            </Styled.CommentContent>
            <ButtonConatiner>
              <Styled.Ddabong1 src={UpOff} />5
              <Styled.Ddabong2 src={UpOff} />
            </ButtonConatiner>
          </Styled.CommentWrap>
        </Styled.Comment>
        <Styled.Comment>
          <Styled.CommentImg src={Profile3} />
          <Styled.CommentWrap>
            <Styled.ProfileName>
              곰<span style={spanStyle}>2일전</span>
            </Styled.ProfileName>
            <Styled.CommentContent>
              기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤
            </Styled.CommentContent>
            <ButtonConatiner>
              <Styled.Ddabong1 src={UpOff} />7
              <Styled.Ddabong2 src={UpOff} />
            </ButtonConatiner>
          </Styled.CommentWrap>
        </Styled.Comment>
        <Styled.Comment>
          <Styled.CommentImg src={Profile4} />
          <Styled.CommentWrap>
            <Styled.ProfileName>
              여우
              <span style={spanStyle}>5일전</span>
            </Styled.ProfileName>
            <Styled.CommentContent>
              기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤
            </Styled.CommentContent>
            <ButtonConatiner>
              <Styled.Ddabong1 src={UpOff} />8
              <Styled.Ddabong2 src={UpOff} />
            </ButtonConatiner>
          </Styled.CommentWrap>
        </Styled.Comment>
        <Styled.Comment>
          <Styled.CommentImg src={Profile5} />
          <Styled.CommentWrap>
            <Styled.ProfileName>
              사슴
              <span style={spanStyle}>8일전</span>
            </Styled.ProfileName>
            <Styled.CommentContent>
              기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤기엽게 생겼네욤
            </Styled.CommentContent>
            <ButtonConatiner>
              <Styled.Ddabong1 src={UpOff} />9
              <Styled.Ddabong2 src={UpOff} />
            </ButtonConatiner>
          </Styled.CommentWrap>
        </Styled.Comment>
        {mainVideoInfo.comments.map((comment) => {
          return (
            <Styled.Comment key={comment._id}>
              <Styled.CommentImg src={comment.writerId.profileImg} />
              <Styled.CommentWrap>
                <Styled.ProfileName>
                  {comment.writerId.name}
                  <span style={spanStyle}>{comment.commentTimeAgo}</span>
                </Styled.ProfileName>
                <Styled.CommentContent>{comment.commentContent}</Styled.CommentContent>
                <ButtonConatiner>
                  <Styled.Ddabong1 src={UpOff} />
                  {comment.commentLikes}
                  <Styled.Ddabong2 src={UpOff} />
                </ButtonConatiner>
              </Styled.CommentWrap>
            </Styled.Comment>
          );
        })}
      </Styled.Wrapper>
    </MainVideoWrapper>
  );
}
const spanStyle = {
  color: '#606060',
  margin: '1px',
};

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
  width: calc(100% - (4.9rem + 1.5rem + 7.4rem));
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

const SubscribeButton = styled.button`
  width: 7.4rem;
  height: 3.8rem;
  background-color: ${({ theme }) => theme.color.main_red};
  border: none;
  border-radius: 0.2rem;
  color: white;
`;

const Styled = {
  Wrapper: styled.div`
    width: 106.8rem;
    display: flex;
    flex-direction: column;
  `,
  CommentCount: styled.h2`
    width: 100%;
    height: 2.3rem;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.3rem;
    margin-bottom: 1.3rem;
    margin: 24px;
  `,
  AddComment: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1023px;
    margin: 7px 23px;
  `,
  Input: styled.input`
    flex: 1;
    border: none;
    border-bottom: 1px solid #ccc;
    height: 25.5px;
    ::placeholder {
      color: black;
    }
  `,
  ProfileImg: styled.img`
    width: 41px;
    height: 41px;
    margin-right: 15px;
  `,
  Comment: styled.article`
    display: flex;
    align-items: flex-start;
    width: 756px;
    height: 89px;
    flex-direction: row;
    margin: 25px 23px;
  `,
  ProfileName: styled.h4`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.7rem;
    margin-bottom: 0.6rem;
  `,
  CommentImg: styled.img`
    width: 41px;
    height: 41px;
    margin-top: 7px;
    margin-right: 15px;
    border-radius: 50%;
  `,
  CommentWrap: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6px;
  `,
  CommentContent: styled.h4`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.7rem;
    margin-bottom: 15px;
  `,
  Ddabong1: styled.img`
    width: 24px;
    height: 24px;
    margin-right: 12px;
  `,
  Ddabong2: styled.img`
    width: 24px;
    height: 24px;
    margin-left: 20px;
    transform: scaleX(-1) scaleY(-1);
  `,
};
