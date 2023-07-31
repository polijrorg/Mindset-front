import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    @font-face {
        font-family: "Poppins";
        font-weight: 400;
        src: local("Poppins"), url("/fonts/Poppins/Poppins-Regular.woff") format('truetype');
    }

    @font-face {
        font-family: "Poppins_900";
        font-weight: 900;
        src: local("Poppins"), url("/fonts/Poppins/Poppins-ExtraBold.woff") format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins;
        src: local("Poppins"), url('/fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap') format('truetype');
    }
    button {
        outline: none;
        border: none;
    }
`;
