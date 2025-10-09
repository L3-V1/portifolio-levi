import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --navbar-height: 10vh;
  }

  html: {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Montserrat", sans-serif;
  }

  .navbar {
    min-height: var(--navbar-height);
  }
`

export default GlobalStyle