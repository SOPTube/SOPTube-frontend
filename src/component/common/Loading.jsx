import React from 'react';
import styled from 'styled-components';
function Loading() {
  return <Styled.Root>Loading...</Styled.Root>;
}

export default Loading;

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    z-index: 1000;
    color: black;
  `,
};
