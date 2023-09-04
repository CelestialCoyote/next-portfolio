"use client";

import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import generateMarvelAuthentication from '@/utils/generateMarvelAuthentication';
//import { StyledCharacterDetails } from './CharacterDetails.styled';
import ComicCard from '../ComicCard/ComicCard';
//import './CharacterDetails.css';


const CharacterDetails = ({ character, setCharacterDetails }) => {
    const characterImage = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    const [comicsData, setComicsData] = useState([]);


    useEffect(() => {
        const getComicsData = async () => {
            const BASE_MARVEL_URL = 'http://gateway.marvel.com/v1/public/';
            const marvelAuth = generateMarvelAuthentication();
            const url = `${BASE_MARVEL_URL}/characters/${character.id}/comics?${marvelAuth}`;

            try {
                //let comicsData = await axios.get(url);
                setComicsData(comicsData.data.data.results);
            } catch (error) {
                console.log(error.message);
            }
        }

        getComicsData();
    });

    return (

        <div>

            <div className="characterDetails_container">

                <div className="characterDetails_character">
                    <img className="characterDetails_image" src={characterImage} alt="character" />
                    <div className="characterDetails_info">
                        <p
                            className="characterDetails_text">
                            <span className="heading">Marvel ID: </span>
                            {character.id}
                        </p>
                        <p
                            className="characterDetails_text">
                            <span className="heading">Name: </span>
                            {character.name}
                        </p>
                        <div className="characterDetails_description">
                            <p
                                className="characterDetails_text">
                                <span className="heading">Description: </span>
                                {character.description}
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    className="characterDetails_button"
                    onClick={() => {
                        setCharacterDetails(false);
                    }}
                >
                    Back
                </button>

            </div>

            <div className="comics_header">
                Comics:
            </div>

            <div className="characterDetails_comics">

                {comicsData.map(comic =>
                    <ComicCard
                        key={comic.id}
                        comic={comic}
                    />                
                )}
            </div>

        </div>
    );
};


export default CharacterDetails;
