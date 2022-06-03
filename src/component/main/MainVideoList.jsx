import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainVideoCard from './MainVideoCard';

function MainVideoList({ data }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/detail', { state: '628de4f728d7b4dde3fb58e5' });
  };
  return (
    <Styled.Root>
      {data?.map((item) => (
        <MainVideoCard key={item?.videoId} data={item} onClick={handleClick} />
      ))}
    </Styled.Root>
  );
}

export default MainVideoList;

const Styled = {
  Root: styled.ul`
    width: 83%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 6.8rem 1.5rem;
  `,
};
