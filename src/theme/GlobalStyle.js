import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    padding-left: 70px;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    @media(min-width: 500px) {
      padding-left: 90px;
    }
    @media(min-width: 1000px) {
      padding-left: 120px;
    }
  }
`;

export default GlobalStyle;
