import React, { useEffect, useState } from "react";
import CharacterCard from "../../Characters/Character/character";
import './episode.css';

export function Episode(props) {
    const { name, airDate, episode, charactersList, key } = props
    const [character, setCharacter] = useState([])
    const [display, setDisplay] = useState(["none"])

    const apiMap = async (url) => {
      url.map(async (items) => {
        const res = await fetch(items);
        const characterJSON = await res.json();
        setCharacter((prevState) => [...prevState, characterJSON]);
      });
    };

    const onShow= ()=>{
      if(display==="none"){
      display.slice(0);
      setDisplay("flex")}
      else{display.slice(0);
        setDisplay("none")}
    }

    useEffect(()=>{
      apiMap(charactersList)
    }, [charactersList]);

      return (
        <div className="episodeCard">
          <div className="episodeHeadInfo">
            <div className="episodeInfo"><h1>{name}</h1>
            <h3>{episode}</h3>
            <p>{airDate}</p></div>
            <button onClick={onShow}>Characters List</button>
          </div>
          <div className="episodeCharacterCards" id={"episodeCharacterCards"+key} style={{display:display}}>
                {character.map((item) => (
                  <CharacterCard 
                  name={item.name}
                  key={item.id}
                  avatar={item.image}
                  origin={item.origin.name}
                  gender={item.gender}
                  status={item.status}/>
                ))}
                <button onClick={onShow}>Characters List</button>
            </div>
        </div>
      );
    }