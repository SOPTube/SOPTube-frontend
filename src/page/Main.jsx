import React, { useState } from 'react';
import styled from 'styled-components';
import MainTagList from '../component/main/MainTagList';
import MainVideo from '../component/main/MainVideo';

function Main() {
  const [currentType, setCurrentType] = useState('동물');
  const [videoData, setVideoData] = useState([
    {
      videoId: '1',
      videoThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      duration: '00:16',
      userThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      title: '고야야야야양이잉야이이',
      user: '나히바나나',
      views: 10200,
      timeAgo: '1개월 전',
    },
    {
      videoId: '2',
      videoThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      duration: '00:16',
      userThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      title: '고야야야야양이잉야이이',
      user: '나히바나나',
      views: 10200,
      timeAgo: '1개월 전',
    },
    {
      videoId: '3',
      videoThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      duration: '00:16',
      userThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      title: '고야야야야양이잉야이이',
      user: '나히바나나',
      views: 10200,
      timeAgo: '1개월 전',
    },
    {
      videoId: '4',
      videoThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      duration: '00:16',
      userThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      title: '고야야야야양이잉야이이',
      user: '나히바나나',
      views: 10200,
      timeAgo: '1개월 전',
    },
    {
      videoId: '5',
      videoThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      duration: '00:16',
      userThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      title: '고야야야야양이잉야이이',
      user: '나히바나나',
      views: 10200,
      timeAgo: '1개월 전',
    },
    {
      videoId: '6',
      videoThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      duration: '00:16',
      userThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      title: '고야야야야양이잉야이이',
      user: '나히바나나',
      views: 10200,
      timeAgo: '1개월 전',
    },
    {
      videoId: '7',
      videoThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      duration: '00:16',
      userThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      title: '고야야야야양이잉야이이',
      user: '나히바나나',
      views: 10200,
      timeAgo: '1개월 전',
    },
    {
      videoId: '8',
      videoThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      duration: '00:16',
      userThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      title: '고야야야야양이잉야이이',
      user: '나히바나나',
      views: 10200,
      timeAgo: '1개월 전',
    },
    {
      videoId: '9',
      videoThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      duration: '00:16',
      userThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      title: '고야야야야양이잉야이이',
      user: '나히바나나',
      views: 10200,
      timeAgo: '1개월 전',
    },
    {
      videoId: '10',
      videoThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      duration: '00:16',
      userThumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCabcw%2Fbtrrdmj0A58%2F1YkOil23N3sFbQsrY61qpK%2Fimg.jpg',
      title: '고야야야야양이잉야이이',
      user: '나히바나나',
      views: 10200,
      timeAgo: '1개월 전',
    },
  ]);
  return (
    <Styled.Root>
      <MainTagList setCurrentType={setCurrentType} />
      <MainVideo data={videoData} />
    </Styled.Root>
  );
}

export default Main;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100%;
  `,
};
