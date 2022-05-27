import React from 'react';
import styled from 'styled-components';

import homeSrc from '../assets/icon/icn_home.png';
import exploreSrc from '../assets/icon/icn_explore.png';
import shortsSrc from '../assets/icon/icn_shorts.png';
import subscriptionsSrc from '../assets/icon/icn_subscriptions.png';
import librarySrc from '../assets/icon/icn_library.png';
import historySrc from '../assets/icon/icn_history.png';
import yourVideosSrc from '../assets/icon/icn_yourVideos.png';
import watchLaterSrc from '../assets/icon/icn_watchLater.png';
import likedVideosSrc from '../assets/icon/icn_likedVideos.png';
import youtubePremiumSrc from '../assets/icon/icn_youtubePremium.png';
import moviesSrc from '../assets/icon/icn_movies.png';
import gamingSrc from '../assets/icon/icn_gaming.png';
import liveSrc from '../assets/icon/icn_live.png';
import learningSrc from '../assets/icon/icn_learning.png';
import sportsSrc from '../assets/icon/icn_sports.png';
import settingsSrc from '../assets/icon/icn_settings.png';
import reportHistorySrc from '../assets/icon/icn_reportHistory.png';
import helpSrc from '../assets/icon/icn_help.png';
import sendFeedbackSrc from '../assets/icon/icn_sendFeedback.png';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <FlexSection>
        <FlexDiv>
          <FlexImg src={homeSrc} />홈
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={exploreSrc} />
          탐색
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={shortsSrc} />
          Shorts
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={subscriptionsSrc} />
          구독
        </FlexDiv>
      </FlexSection>
      <FlexSection>
        <FlexDiv>
          <FlexImg src={librarySrc} />
          보관함
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={historySrc} />
          시청 기록
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={yourVideosSrc} />내 동영상
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={watchLaterSrc} />
          나중에 볼 동영상
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={likedVideosSrc} />
          좋아요 표시한 동영상
        </FlexDiv>
      </FlexSection>
      <FlexSection>
        <FlexDiv>YOUTUBE 더보기</FlexDiv>
        <FlexDiv>
          <FlexImg src={youtubePremiumSrc} />
          YouTube Premium
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={moviesSrc} />
          영화
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={gamingSrc} />
          게임
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={liveSrc} />
          실시간
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={learningSrc} />
          학습
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={sportsSrc} />
          스포츠
        </FlexDiv>
      </FlexSection>
      <FlexSection>
        <FlexDiv>
          <FlexImg src={settingsSrc} />
          설정
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={reportHistorySrc} />
          신고 기록
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={helpSrc} />
          고객 센터
        </FlexDiv>
        <FlexDiv>
          <FlexImg src={sendFeedbackSrc} />
          의견 보내기
        </FlexDiv>
      </FlexSection>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.aside`
  width: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.light_grey_02};
`;

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 0.8rem 2rem;
  align-items: center;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const FlexImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 2.4rem;
`;
