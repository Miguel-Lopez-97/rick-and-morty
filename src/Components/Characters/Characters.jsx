import React, { useEffect, useState } from "react";
import "./characters.css";
import CharacterCard from "./Character/character";
import Button from "./Button/button";
import SearchBar from "./SearchBar/SearchBar";


function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  const fetchApi = async (url) => {
    const res = await fetch(url);
    const characterJSON = await res.json();
    const { results, info } = await characterJSON;
    setInfo(info);
    setCharacters(results);
  };

  const onNext = () => {
    fetchApi(info.next);
    console.log(info.next);
  };

  const onPrev = () => {
    fetchApi(info.prev);
    console.log(info.prev);
  };

  const onMale = () => {
    fetchApi("https://rickandmortyapi.com/api/character/?gender=male");
  };
  const onFemale = () => {
    fetchApi("https://rickandmortyapi.com/api/character/?gender=female");
  };
  const onGenderless = () => {
    fetchApi("https://rickandmortyapi.com/api/character/?gender=genderless");
  };
  const onUnknown = () => {
    fetchApi("https://rickandmortyapi.com/api/character/?gender=unknown");
  };

  const FilterName = (name) => {
    fetch("https://rickandmortyapi.com/api/character/?name=" + name).then(
      (res) => {
        if (res.ok) {
          fetchApi("https://rickandmortyapi.com/api/character/?name=" + name);
        } else {
          alert("Character not found");
        }
      }
    );
  };

  const onFilter = () => {
    fetchApi("https://rickandmortyapi.com/api/character");
  };

  useEffect(() => {
    fetchApi(url);
  }, []);

  return (
    <article
      id="articleCharacters"
      style={{
        background:
          "radial-gradient(circle, rgba(38,145,187,1) 40%, rgba(163,5,7,1) 70%)",
      }}
    >
      <div className="buttonNav" id="ButtonTop">
        <Button name="Prev" onChange={onPrev} Pagination={info.prev} />
        <Button name="Next" onChange={onNext} Pagination={info.next} />
        <SearchBar onChange={FilterName} />
        <Button name={"No Filter"} Pagination={true} onChange={onFilter} />
      </div>
      <div className="buttonNav" id="buttonMiddle">
        <Button name="Filter Male" onChange={onMale} Pagination={true} />
        <Button name="Filter Female" onChange={onFemale} Pagination={true} />
        <Button name="F-Genderless" onChange={onGenderless} Pagination={true} />
        <Button name="Filter Unknown" onChange={onUnknown} Pagination={true} />
      </div>
      <div className="divCharacterList">
      {characters.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            name={character.name}
            avatar={character.image}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
          />
        );
      })}
      </div>
      <div className="buttonNav" id="buttonButton">
        <Button name="Prev" onChange={onPrev} Pagination={info.prev} />
        <Button name="Next" onChange={onNext} Pagination={info.next} />
      </div>
    </article>
  );
}

export default Characters;