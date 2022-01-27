import React, { useState, useEffect } from "react";
import { Episode } from "./Episode/Episode";
import Button from "../Characters/Button/button";
import './episodes.css'

export function Episodes(){

    const [episodes, setEpisodes] = useState([]); 
    const [info, setInfo] = useState([]);

    const url = "https://rickandmortyapi.com/api/episode/"

    const fetchApi = async (url) =>{
    const res = await fetch(url);
    const episodesJSON = await res.json();
    const { results, info } = await episodesJSON
    setInfo(info)
    setEpisodes(results)
   
  }

  const onPrevious = () => {
    fetchApi(info.prev);
  };

  const onNext = () => {
    fetchApi(info.next);
  };
  useEffect(() =>{
    fetchApi(url)
  }, [])

    return(
        <article
        id="articleEpisodes">
         <div className="buttonNav">
      <Button name={"Previous Page"} Pagination={info.prev} onChange={onPrevious} />
      <Button name={"Next Page"} Pagination={info.next} onChange={onNext} />
      </div>
      {episodes.map((episode)=>(
            <Episode
                key={episode.id}
                name={episode.name}
                airDate={episode.air_date}
                episode={episode.episode}
                charactersList={episode.characters}
            />
        ))}
        <div className="buttonNav">
      <Button name={"Previous Page"} Pagination={info.prev} onChange={onPrevious} />
      <Button name={"Next Page"} Pagination={info.next} onChange={onNext} />
      </div>
        </article>
    );
}