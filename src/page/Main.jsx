import React from 'react';
import styled from 'styled-components';
import MainVideo from '../component/main/MainVideo';

function Main() {
  return (
    <Styled.Root>
      <MainVideo />
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
