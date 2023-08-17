"use client";

import { useState } from 'react';
import axios from 'axios';
import generateMarvelAuthentication from '../../marvelAPI/generateMarvelAuthentication';
//import { StyledSearchBar } from "./SearchBar.styled";


const SearchBar = ({ setCharacters }) => {
    const [searchText, setSearchText] = useState('');

    const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public/';
    const marvelAuth = generateMarvelAuthentication();


    const submitForm = (event) => {
        event.preventDefault();
        searchCharacters();
        setSearchText('');
    };

    const searchCharacters = async () => {
        let url = `${BASE_MARVEL_URL}/characters?nameStartsWith=${searchText}${marvelAuth}`;

        try {
            let comicData = await axios.get(url);

            setCharacters(comicData.data.data.results);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        
        <div className="searchBar" onSubmit={submitForm}>
            <input
                className="searchText"
                type="text"
                value={searchText}
                placeholder="character name, i.e. Hulk"
                onChange={(event) => setSearchText(event.target.value)}
            />

            <button className="search-button" type="Submit">Search</button>
        </div>
    );
};


export default SearchBar;
