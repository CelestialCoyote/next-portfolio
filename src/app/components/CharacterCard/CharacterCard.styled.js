import styled from "styled-components";


export const StyledCharacterCard = styled.div`
    background-color: gray;
    border: 2px solid red;
    border-radius: 0.5em;
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
    width: 30.0rem;

    .characterCard_image {
        border-radius: 0.5rem;
        height: 16.0rem;
        margin: 0.5rem;
        width: 16.0rem;
    }

    .characterCard_container {
        background-color: gray;
        border-radius: 0.5rem;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content:space-between;
        margin: 0.5rem;
        padding: 0.25rem
    }

    .characterCard_info {
        color: white;
        display: flex;
        flex-direction: column;
    }

    .characterCard_text {
        color: black;
    }

    .characterCard_actions {
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin-top: 2.0rem;
    }

    .characterCard_button {
        background-color: pink;
        border: 2px solid red;
        border-radius: 0.5rem;
        color: black;
        font-weight: bold;
        height: 2.0rem;
        margin: 0.5em 0.25rem;
    }

`