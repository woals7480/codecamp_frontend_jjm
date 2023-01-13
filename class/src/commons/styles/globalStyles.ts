import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    text-decoration: none;
    font-family: "myfont";
  }
  ol,
  ul {
    list-style: none;
  }
  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }
`;
