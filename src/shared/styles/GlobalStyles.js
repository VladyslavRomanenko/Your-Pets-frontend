import "modern-normalize";
import { createGlobalStyle } from "styled-components";
import ManropeRegular from "@/shared/assets/fonts/Manrope-Regular.ttf";
import ManropeSemiBold from "../assets/fonts/Manrope-SemiBold.ttf";
import ManropeBold from "../assets/fonts/Manrope-Bold.ttf";
import ManropeExtraBold from "../assets/fonts/Manrope-ExtraBold.ttf";
import ManropeMedium from "../assets/fonts/Manrope-Medium.ttf";
import InterRegular from "../assets/fonts/Inter-Regular.ttf";
import InterMedium from "../assets/fonts/Inter-Medium.ttf";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Manrope-SemiBold';
  src: url(${ManropeSemiBold});
  font-display: swap;
}

@font-face {
  font-family: 'Manrope-Regular';
  src: url(${ManropeRegular});
  font-display: swap;
}

@font-face {
  font-family: 'Manrope-Bold';
  src: url(${ManropeBold});
  font-display: swap;
}

@font-face {
  font-family: 'Manrope-ExtraBold';
  src: url(${ManropeExtraBold});
  font-display: swap;
}

@font-face {
  font-family: 'Manrope-Medium';
  src: url(${ManropeMedium});
  font-display: swap;
}

@font-face {
  font-family: 'Inter-Regular';
  src: url(${InterRegular});
  font-display: swap;
}

@font-face {
  font-family: 'Inter-Medium';
  src: url(${InterMedium});
  font-display: swap;
}

@font-face {
  font-family: 'Poppins-Regular';
  src: url(${PoppinsRegular});
  font-display: swap;
}


html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;  
  margin: 0;
  font-family: 'Manrope-SemiBold', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #111111;
  background-color: #FEF9F9;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  display: block;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  padding: 0;
  border: none;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
`;
