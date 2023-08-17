import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");

    * {
        box-sizing: border-box;
        font-family: 'Comic Neue', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: black;
        display: flex;
        height: 100vh;
    }

    #root {
        display: flex;
        flex-grow: 1;
    }

    .App {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .page {
        background-color: gray;
        flex: 1;
    }
`

export default GlobalStyles;
