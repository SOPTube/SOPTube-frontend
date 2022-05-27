import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    height: 100%;
  }
  
  html,
  body {
    font-size: 10px;
    font-family: 'Noto Sans KR';
    height: 100%;
  }
`;

export default GlobalStyle;
