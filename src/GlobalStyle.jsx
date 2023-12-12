import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
  box-sizing: border-box;
  margin: 0;
  }

  html {
    scroll-behavior: smooth;
   
  }

  body {
    font-family: 'Nunito', sans-serif;
    color: rgba(0, 0, 0, 0.87);
    background-color: ${({ theme }) => theme.color.background};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;

   
  }


  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
