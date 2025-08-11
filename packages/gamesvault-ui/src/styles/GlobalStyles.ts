import { createGlobalStyle } from "styled-components";

// Global Styles
export const GlobalStyles = createGlobalStyle`
  /* CSS Reset and Base Styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.sizes.body};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    line-height: ${({ theme }) => theme.typography.lineHeights.body};
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
  }
 
  /* Link Styles */
  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.textSecondary};
      text-decoration: underline;
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  }

  /* List Styles */
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* Media Elements */
  img, svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Utility Classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default GlobalStyles;