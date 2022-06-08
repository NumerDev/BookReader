import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *, *::before, *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        height: 100vh;
        display:flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto', sans-serif;
     
    }
`;
