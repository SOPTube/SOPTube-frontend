import React from 'react';
import styled from 'styled-components';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <ViewSection>
        <Home />
        <Explore />
        <Shorts />
        <Subscriptions />
      </ViewSection>
      <StoringSection>
        <Library />
        <History />
        <YourVideos />
        <WatchLater />
        <LikedVideos />
      </StoringSection>
      <SeeMoreSection>
        <YouTubePremium />
        <Movies />
        <Gaming />
        <Live />
        <Learning />
        <Sports />
      </SeeMoreSection>
      <SettingsSection>
        <Settings />
        <ReportHistory />
        <Help />
        <SendFeedback />
      </SettingsSection>
      <Footer></Footer>
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
`;

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 0.8rem 2rem;
`;

const ViewSection = styled(FlexSection)``;

const Home = styled(FlexDiv)``;
const Explore = styled(FlexDiv)``;
const Shorts = styled(FlexDiv)``;
const Subscriptions = styled(FlexDiv)``;

const StoringSection = styled(FlexSection)``;

const Library = styled(FlexDiv)``;
const History = styled(FlexDiv)``;
const YourVideos = styled(FlexDiv)``;
const WatchLater = styled(FlexDiv)``;
const LikedVideos = styled(FlexDiv)``;

const SeeMoreSection = styled(FlexSection)``;

const YouTubePremium = styled(FlexDiv)``;
const Movies = styled(FlexDiv)``;
const Gaming = styled(FlexDiv)``;
const Live = styled(FlexDiv)``;
const Learning = styled(FlexDiv)``;
const Sports = styled(FlexDiv)``;

const SettingsSection = styled(FlexSection)``;

const Settings = styled(FlexDiv)``;
const ReportHistory = styled(FlexDiv)``;
const Help = styled(FlexDiv)``;
const SendFeedback = styled(FlexDiv)``;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
