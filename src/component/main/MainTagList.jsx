import React from 'react';
import Tag from '../common/Tag';
import { mainTagList } from '../../constants/tagList';
import styled from 'styled-components';
/*
interface MainTagListProps {
    setCurrentType: setState
}
*/
function MainTagList({ setCurrentType }) {
  const handleOnClick = (e) => {
    console.log('>>클릭한 테그', e.target.value);
    setCurrentType(e.target.value);
  };
  return (
    <Styled.Root>
      {mainTagList.map((item) => (
        <Tag key={item.id} onClick={handleOnClick}>
          {item.contents}
        </Tag>
      ))}
    </Styled.Root>
  );
}

export default MainTagList;

const Styled = {
  Root: styled.ul``,
};
