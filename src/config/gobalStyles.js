import { createGlobalStyle } from "styled-components";
import themeList from "./themeList";

const GlobalStyles = createGlobalStyle`
  
  :root{
    // Color
    --mediumSlateBlue: #6C62E2;
    --dark-components: #7C3AED; // Ungu
    --darkCardComponent : #7C3AED; // Ungu
    --lightCardComponent : #1f2937;
    --light-text-black: #000000;
    --dark-text-white: #FFFFFF; // White
    --light-text-grey: #979797;
    --lightText: #3c3c3c;
    --darkText: #ccd6f6;
    --lightTab : #1f2937;
    --darkTab : #979797;
    --colorMain : #0B9608; // Ungu #7c3aed, Hijau #0B9608
    --colorWhite : #ffffff; // White

    --colorMain : #0B9608; // Ungu #7c3aed, Hijau #0B9608
    
    --lightText: #000;
    --darkText: #fff;

    --dark-background: #161c24;
    --light-background: #fff;

    --mediumColor: #2a3039; // example in card
  }
  
  body {
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--light-background)"
        : "var(--dark-background)"};
    font-family: "Rubik", sans-serif;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "var(--lightText)" : "var(--darkText)"};
    text-align: center;
  }
  
  html {
    scroll-behavior: smooth;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    border: none;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #495670;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#f0f8ff" : "#1a1d29"};
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: unset;
  }
  ul,li {
    list-style: none;
  }
  /* img {
    width: 100%;
    height: 100%;
  } */
  section {
    margin: 0px auto;
    padding: 100px 0px;
    max-width: 1200px;
  }
`;

export default GlobalStyles;
