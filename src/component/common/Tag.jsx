import React from 'react';
import styled from 'styled-components';
/*
interface TagProps{
    children: string;
    isClicked: bool;
}
*/
function Tag({ children, isClicked, ...props }) {
  return (
    <Styled.Root isClicked={isClicked} {...props}>
      {children}
    </Styled.Root>
  );
}

export default Tag;

const Styled = {
  Root: styled.li``,
};
