import styled from "styled-components";


export const StyledCharacterDetails = styled.div`
    
    border-top: 4px solid black;
    display: flex;
    flex-direction: column;
    margin: 0.25em;
    padding: 0.5em;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    .characterDetails_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .characterDetails_character {
        display: flex;
        flex-direction: row;
        width: 60%
    }

    .characterDetails_image {
        height: 40vh;
        margin-right: 2.0em;
    }

    .characterDetails_text {
        color: var(--captainAmerica-white);
        font-size: 1.5em;
    }

    .characterDetails_description {
        height: 32vh;
        margin: 0.75em 0;
        overflow-y: scroll;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .characterDetails_description::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .characterDetails_description {
        -ms-overflow-style: none;                   /* IE and Edge */
        scrollbar-width: none;                      /* Firefox */
    }

    .characterDetails_button {
        background-color: gray;
        border: 2px solid red;
        border-radius: 0.5em;
        color: red;
        font-size: 1.0em;
        font-weight: bold;
        height: 3.0em;
        margin: 0.5em 0.25em;
        width: 6.0em;
    }

    .comics_header {
        color: black;
        font-size: 2.0em;
        margin-top: 1.5em;
    }

    .characterDetails_comics {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 1.5em;
        padding: 0;
    }

`
