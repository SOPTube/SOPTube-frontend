import React from 'react';
import styled from 'styled-components';
import Profile from '../../assets/icon/img_profile.png';
import Profile2 from '../../assets/icon/profile2.png';
import UpOff from '../../assets/icon/ic_up_off.png';
import DownOff from '../../assets/icon/ic_down_off.png';

const DetailComment = () => {
  return (
    <Styled.Wrapper>
      <Styled.CommentCount>댓글 4개</Styled.CommentCount>
      <Styled.AddComment>
        <Styled.ProfileImg src={Profile} />
        <Styled.Input type="text" placeholder="댓글 추가..." />
      </Styled.AddComment>
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
          <Styled.Ddabong src={UpOff} />
          <Styled.Ddabong src={DownOff} />
        </Styled.CommentWrap>
      </Styled.Comment>
    </Styled.Wrapper>
  );
};
const spanStyle = {
  color: '#606060',
};

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
    background-color: red;
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
    margin-right: 15px;
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
  Ddabong: styled.img`
    width: 24px;
    height: 24px;
    margin-right: 39px;
  `,
};

export default DetailComment;
