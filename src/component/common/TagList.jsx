import React from 'react';
import Tag from './Tag';
import { tagList } from '../../constants/tagList';
import styled from 'styled-components';

function TagList({ setCurrentType, currentType, pageType }) {
  const handleOnClick = (e) => {
    setCurrentType(e.currentTarget.id);
  };
  return (
    <Styled.Root>
      {tagList[pageType].map((item) => (
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

export default TagList;

const Styled = {
  Root: styled.ul`
    display: flex;
    /* width: 100%; */
    height: 5.5rem;
    background: white;
  `,
};
