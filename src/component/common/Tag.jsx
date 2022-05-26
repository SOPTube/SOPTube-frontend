import React from 'react';
import styled from 'styled-components';
import { flexRowCenter } from '../../styles/mixin';
/*
interface TagProps{
    children: string;
    isClicked: bool;
}
*/

function Tag({ children, isClicked, ...props }) {
  return (
    <Styled.Root isClicked={isClicked} {...props}>
      <a href="#">{children}</a>
    </Styled.Root>
  );
}

export default Tag;

const Styled = {
  Root: styled.li`
    cursor: pointer;
    z-index: 1;
    ${flexRowCenter};
    padding: 0.6rem 1.3rem;
    border-radius: 5rem;
    height: 3.1rem;
    margin-right: 1.2rem;
    background: ${(props) =>
      props.isClicked ? props.theme.color.dark_grey : props.theme.color.light_grey_05};
    border: 1px solid
      ${(props) =>
        props.isClicked ? props.theme.color.dark_grey : props.theme.color.light_grey_01};
    & a {
      list-style-type: none;
      color: ${(props) => (props.isClicked ? props.theme.color.white : props.theme.color.black)};
      font-style: normal;
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 1.9rem;
      ${flexRowCenter};
      &:link {
        text-decoration: none;
      }
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
      }
    }
  `,
};
