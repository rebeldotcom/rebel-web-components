import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import reset from "styled-reset";
import { fonts } from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,800,900');
  
  ${styledNormalize}
  ${reset}

  html {
    font-size: 62.5%;
    font-family: ${fonts.default};
    -webkit-font-smoothing: antialiased;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    font-size: 1.6rem;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
