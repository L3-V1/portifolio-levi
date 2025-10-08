import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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