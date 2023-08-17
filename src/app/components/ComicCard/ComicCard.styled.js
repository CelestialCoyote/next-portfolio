import styled from "styled-components";


export const StyledComicCard = styled.div`

    border: 2px solid red;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row;
    margin: 1.0rem;
    padding: 1.0rem;
    width: 30.0rem;

    .comicCard_info {
        margin-left: 1.0em;
    }

    .comicCard_image {
        height: 35vh;
    }

    .comic_text {
        color: black;
    }

    .comic_description {
        color: white;
        height: 22vh;
        margin: 0.75em 0;
        overflow-y: scroll;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .comic_description::-webkit-scrollbar {
        display: none;
    }

`
