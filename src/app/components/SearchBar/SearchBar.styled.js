import styled from 'styled-components'


export const StyledSearchBar = styled.form`

    align-items: center;
    display: flex;
    justify-content: center;
    margin: 2.0rem 0;

    .searchBar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 1.5rem;
        width: 100%;
    }

    .searchText {
        background-color: pink;
        border: 2px solid red;
        border-radius: 0.5rem;
        color: red;
        font-size: 1.5rem;
        margin-right: 1.5rem;
        padding: 0.25rem;
        width: 50%;
    }

    .searchText:focus {
        outline: none;
    }

    .searchText::placeholder {
        color: #555;
    }

    .search-button {
        background-color: pink;
        border: 2px solid red;
        border-radius: 0.5rem;
        color: red;
        font-size: 1.5rem;
        font-weight: bold;
        height: 2.5rem;
        width: 8.0rem;
    }
`
