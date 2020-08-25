import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        background-color: gray;
        font-family: 'Roboto Slab', serif;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;