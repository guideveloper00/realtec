import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  @keyframes animatedTopToPlace {
    0% {
      top: -50px;
      opacity: 0;
    }
    100% {
      top: 0px;
      opacity: 1;
    }
  }
  @keyframes animatedRightToPlace {
    0% {
      right: -50px;
      opacity: 0;
    }
    100% {
      right: 0px;
      opacity: 1;
    }
  }
  @keyframes animatedLeftToPlace {
    0% {
      left: -50px;
      opacity: 0;
    }
    100% {
      left: 0px;
      opacity: 1;
    }
  }
  @keyframes AnimatedBG { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
}

  html:focus-within {
    scroll-behavior: smooth;
  }

  html::-webkit-scrollbar {
    width: 15px;
  }
  
  html::-webkit-scrollbar-track {
    background: white;
  }
  
  html::-webkit-scrollbar-thumb {
    background-color: #276583;
  }

  
html {
    @media (max-width: 1680px) {
      font-size: 93.75%;
    }
    @media (max-width: 1080px) {
      font-size: 75%;
    }
    @media (max-width: 720px) {
      font-size: 65%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-decoration: none;
    list-style: none;
    color: #7f7c80;
    line-height: 1.5rem;

    

    --webkit-font-smoothing: antialiased;

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;

      button {
        cursor: pointer;
      }
    }
  }
`;
