import { createGlobalStyle } from "styled-components";
import background from "./money.png";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Outfit', sans-serif;
    background-color: #0F172A;
    background-image: 
      radial-gradient(circle at top right, rgba(147, 51, 234, 0.2), transparent 40%),
      radial-gradient(circle at bottom left, rgba(20, 184, 166, 0.2), transparent 40%),
      url("${background}");
    background-blend-mode: overlay;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.color.textPrimary};
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;
