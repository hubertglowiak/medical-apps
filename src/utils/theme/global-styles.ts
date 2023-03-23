import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  
  #root {
    display: flex;
    width: 100%;
    flex-direction: column;
    min-height: 100vh;
  }
`;
