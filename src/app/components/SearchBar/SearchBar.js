"use client";

import { useState } from 'react';
import axios from 'axios';
import generateMarvelAuthentication from '../../marvelAPI/generateMarvelAuthentication';


const SearchBar = ({ setCharacters }) => {
    const [searchText, setSearchText] = useState('');

    const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public/';
    const marvelAuth = generateMarvelAuthentication();


    const submitForm = (event) => {
        event.preventDefault();
        searchCharacters();
        setSearchText('');
		console.log("here");
    };

    const searchCharacters = async () => {
        let url = `${BASE_MARVEL_URL}/characters?nameStartsWith=${searchText}${marvelAuth}`;

        try {
            let comicData = await axios.get(url);

            setCharacters(comicData.data.data.results);

			console.log("here");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        
        <div
			onSubmit={submitForm}
			className="flex justify-center mt-10"
		>
            <input
                className="text-blue-500"
                type="text"
                value={searchText}
                placeholder="character name, i.e. Hulk"
                onChange={(event) => setSearchText(event.target.value)}
            />

            <button className="ml-6 border-2 p-2" type="Submit">Search</button>
        </div>
    );
};


export default SearchBar;
