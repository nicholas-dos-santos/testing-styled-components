import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background-color: teal;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1{
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        font-style: italic;
        font-variant: unset;

    }

    p{
        text-decoration: underline;
    }

`;
