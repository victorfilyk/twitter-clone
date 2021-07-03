import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Prompt";
    src: url("/fonts/Prompt-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles
