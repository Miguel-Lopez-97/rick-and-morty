import React, { useEffect, useState } from "react";
import "./characters.css";
import CharacterCard from "./Character/character";
/* import { Morty, CharacterList } from "./characters-list"; */
/* import { characterList } from "./characters-list"; */
import Button from "./Button/button";
import SearchBar from "./SearchBar/SearchBar";

/* function Characters(){
    return(
        <article id='articleCharacters' style={{background: 'radial-gradient(circle, rgba(38,145,187,1) 40%, rgba(163,5,7,1) 70%)'}}>
            <Character/>
        </article>
    );
}

export default Characters */

/* function Characters(){
    return(
        <article id='articleCharacters' style={{background: 'radial-gradient(circle, rgba(38,145,187,1) 40%, rgba(163,5,7,1) 70%)'}}>
            <Character
            key={2}
            name={"Morty Smith"}
            avatar={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
            status={"Alive"}
            specie={"Human"}
            gender={"Male"}
            origin={"Earth"}
            />
        </article>
    );
}

export default Characters */

/* function Characters(){
    return(
        <article id='articleCharacters' style={{background: 'radial-gradient(circle, rgba(38,145,187,1) 40%, rgba(163,5,7,1) 70%)'}}>
            {<Character
            key={Morty.id}
            name={Morty.name}
            avatar={Morty.avatar}
            status={Morty.status}
            specie={Morty.specie}
            gender={Morty.gender}
            origin={Morty.origin.name}/>}
        </article>
    );
}

export default Characters */

/* function Characters() {
  return (
    <article
      id="articleCharacters"
      style={{
        background:
          "radial-gradient(circle, rgba(38,145,187,1) 40%, rgba(163,5,7,1) 70%)",
      }}
    >
      {characterList &&
        characterList.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            avatar={character.avatar}
            status={character.status}
            specie={character.specie}
            gender={character.gender}
            origin={character.origin.name}
          />
        ))}
    </article>
  );
}

export default Characters; */

/* function Characters() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      let url = "https://rickandmortyapi.com/api/character";
      fetch(url)
        .then((res) => res.json())
        .then((json) =>{
            console.log(json)
            console.log(json.results)
            json.results.forEach((el) => {
                let characterNew = {
                    id: el.id,
                    name: el.name,
                    avatar: el.image,
                    status: el.status,
                    specie: el.species,
                    gender: el.gender,
                    origin: el.origin.name}
                    setCharacter(prev=>[...prev, characterNew],
                    console.log(characterNew))
            })
            let urlNext = json.info.next
            let urlPrev = json.info.prev
            console.log(urlNext, urlPrev)
        });
    };
    getApi();},
    []);


  return (
    <article
      id="articleCharacters"
      style={{
        background:
          "radial-gradient(circle, rgba(38,145,187,1) 40%, rgba(163,5,7,1) 70%)",
      }}
    >
      { character.map((el) => (
          <CharacterCard
            key={el.id}
            name={el.name}
            avatar={el.avatar}
            status={el.status}
            specie={el.specie}
            gender={el.gender}
            origin={el.origin}
          />
        ))}
    </article>
  );
}

export default Characters;
 */

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [filterButtons, setFilterButtons] = useState([])

  let url = "https://rickandmortyapi.com/api/character";

  const getApi = async (url) =>{
    const res = await fetch(url);
    const characterJSON = await res.json();
    const { results, info } = await characterJSON
    setCharacters(results)
    setInfo(info)
  }

  const onPrevious = () => {
    getApi(info.prev);
  };

  const onNext = () => {
    getApi(info.next);
  };
  const Filter0 = () => {
    getApi("https://rickandmortyapi.com/api/character/?gender=male");
  };
  const Filter1 = () => {
    getApi("https://rickandmortyapi.com/api/character/?gender=female");
  };
  const Filter2 = () => {
    getApi("https://rickandmortyapi.com/api/character/?gender=genderless");
  };
  const Filter3 = () => {
    getApi("https://rickandmortyapi.com/api/character/?gender=unknow");
  };

  const FilterName = (name) => {
    fetch("https://rickandmortyapi.com/api/character/?name="+name)
    .then((res) => {
      if (res.ok) 
      {getApi("https://rickandmortyapi.com/api/character/?name="+name)}
      else {alert('Character not found')}})};

  const onFilter = () => {
    getApi("https://rickandmortyapi.com/api/character")
  };

  useEffect(() => {
    getApi(url);
  }, []);

  return (
    <article
      id="articleCharacters"
      style={{
        background:
          "radial-gradient(circle, rgba(38,145,187,1) 40%, rgba(163,5,7,1) 70%)",
      }}
    >
      <div className="buttonNav">
      <Button name={"Previous Page"} Pagination={info.prev} onChange={onPrevious} />
      <Button name={"Next Page"} Pagination={info.next} onChange={onNext} />
      <SearchBar  onChange={FilterName}/>
      <Button name={"No Filter"} Pagination={true} onChange={onFilter} />
      </div>
      <div className="buttonNav">
      <Button name={"Male"} onChange={Filter0} Pagination="true" />
      <Button name={"Female"} onChange={Filter1} Pagination="true" />
      <Button name={"Genderless"} onChange={Filter2} Pagination="true" />
      <Button name={"Unknown??"} onChange={Filter3} Pagination="true" />
      </div>
      {characters.map((character) => {
      return(
        <CharacterCard
          key={character.id}
          name={character.name}
          avatar={character.image}
          status={character.status}
          specie={character.species}
          gender={character.gender}
          origin={character.origin.name}
        />
      )})}
      <div className="buttonNav">
      <Button name={"Previous Page"} Pagination={info.prev} onChange={onPrevious} />
      <Button name={"Next Page"} Pagination={info.next} onChange={onNext} />
      </div>
    </article>
  );
}

export default Characters;

/* function Characters() {
    const [character, setCharacter] = useState([]);
  
    useEffect(() => {
      let url = "https://rickandmortyapi.com/api/character";
      let urlNext;
      let urlPrev;
      const getApi = async (url) => {
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            console.log(json.results);
            json.results.forEach((el) => {
              let characterNew = {
                id: el.id,
                name: el.name,
                avatar: el.image,
                status: el.status,
                specie: el.species,
                gender: el.gender,
                origin: el.origin.name,
              };
              setCharacter(
                (prev) => [...prev, characterNew],
                console.log(characterNew)
              );
            });
            urlNext = json.info.next;
            urlPrev = json.info.prev;
            console.log(urlNext, urlPrev);
          });
      };
      getApi(url);
    }, []);
  
    return (
      <article
        id="articleCharacters"
        style={{
          background:
            "radial-gradient(circle, rgba(38,145,187,1) 40%, rgba(163,5,7,1) 70%)",
        }}
      >
        {character.map((el) => (
          <CharacterCard
            key={el.id}
            name={el.name}
            avatar={el.avatar}
            status={el.status}
            specie={el.specie}
            gender={el.gender}
            origin={el.origin}
          />
        ))}
        <Button name={"Anterior"} url={useEffect.urlPrev} ChangeFunction={useEffect.getApi()}/>
        <Button name={"Siguiente"} url={useEffect.urlNext} ChangeFunction={useEffect.getApi()}/>
      </article>
    );
  }
  
  export default Characters; */
