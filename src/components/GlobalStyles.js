import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    padding-top: 80px;
    background-color: rgba(20, 20, 20, 1);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #fff;
  }

  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
