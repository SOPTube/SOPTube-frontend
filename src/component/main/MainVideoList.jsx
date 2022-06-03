import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainVideoCard from './MainVideoCard';

function MainVideoList({ data }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate('/detail', { state: e.currentTarget.id });
  };
  return (
    <Styled.Root>
      {data?.map((item) => (
        <MainVideoCard key={item?._id} data={item} onClick={handleClick} id={item?._id} />
      ))}
    </Styled.Root>
  );
}

export default MainVideoList;

const Styled = {
  Root: styled.ul`
    width: 100%;
    height: 100%;
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(291px, 1fr));
    row-gap: 25px;
    column-gap: 25px; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 6.8rem 1.5rem;
  `,
};
