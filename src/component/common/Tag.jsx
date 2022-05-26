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
  Root: styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 1.3rem;
    border-radius: 5rem;
    height: 3.1rem;
    margin-right: 1.2rem;
    background: ${(props) =>
      props.isClicked ? props.theme.color.dark_grey : props.theme.color.light_grey_05};
    border: 1px solid
      ${(props) =>
        props.isClicked ? props.theme.color.dark_grey : props.theme.color.light_grey_01};
    color: ${(props) => (props.isClicked ? props.theme.color.white : props.theme.color.black)};
    cursor: pointer;
  `,
};
