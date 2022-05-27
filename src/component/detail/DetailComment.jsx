import React from 'react';
import styled from 'styled-components';
import Profile from '../../assets/icon/img_profile.png';

const DetailComment = () => {
  return (
    <Styled.Wrapper>
      <Styled.CommentCount>댓글 4개</Styled.CommentCount>
      <Styled.AddComment>
        <Styled.ProfileImg src={Profile} />
        <Styled.Input type="text" placeholder="댓글 추가..." />
      </Styled.AddComment>
      <Styled.Comment>
        <Styled.ProfileImg src={Profile} />
        <Styled.ProfileName>독수리</Styled.ProfileName>
      </Styled.Comment>
    </Styled.Wrapper>
  );
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
  `,
  Comment: styled.article`
    width: 756px;
    height: 89px;
    flex-direction: column;
    align-items: center;
    margin: 25px 23px;
  `,
  ProfileName: styled.h4`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.7rem;
    margin-bottom: 0.6rem;
  `,
};

export default DetailComment;
