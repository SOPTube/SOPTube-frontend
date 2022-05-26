import React, { useState } from 'react';
import Tag from '../common/Tag';
import { mainTagList } from '../../constants/tagList';
import styled from 'styled-components';
/*
interface MainTagListProps {
    setCurrentType: setState
}
*/
function MainTagList({ setCurrentType, currentType }) {
  // const [isClicked, setIsClicked] = useState()
  const handleOnClick = (e) => {
    setCurrentType(e.currentTarget.id);
  };
  return (
    <Styled.Root>
      {mainTagList.map((item) => (
        <Tag
          key={item.id}
          onClick={handleOnClick}
          id={item.contents}
          isClicked={item.contents === currentType}
        >
          {item.contents}
        </Tag>
      ))}
    </Styled.Root>
  );
}

export default MainTagList;

const Styled = {
  Root: styled.ul`
    display: flex;
    width: 106.2rem;
    height: 5.5rem;
  `,
};
