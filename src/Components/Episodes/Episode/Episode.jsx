import React, { useEffect, useState } from "react";
import CharacterCard from "../../Character/Character/character";
import './episode.css';

export function Episode(props) {
    const { name, airDate, episode, charactersList } = props
    const [character, setCharacter] = useState([])

    useEffect(async () => {
        charactersList.map(async (items) => {
          const res = await fetch(items);
          const characterJSON = await res.json();
          setCharacter((prevState) => [...prevState, characterJSON]);
        });
      }, []);
      return (
        <div className="episodeCard">
          <div className="episodeInfo">
            <h1>{name}</h1>
            <h3>{episode}</h3>
            <p>{airDate}</p>
          </div>
          <div className="episodeCharacterCards">
                {character.map((item) => (
                  <CharacterCard 
                  name={item.name}
                  key={item.id}
                  avatar={item.image}
                  origin={item.origin.name}/>
                ))}
            </div>
        </div>
      );
    }