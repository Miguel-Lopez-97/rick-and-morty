import "./character.css";

/* function Character() {
  return (
    <div className="characterCard">
      <div className="characterImage">
        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="image" />
      </div>
      <div className="characterInfo">
        <h1>Name</h1>
        <h3>Status</h3>
        <h3>Specie</h3>
        <p>Gender</p>
        <p>Origin-name</p>
      </div>
    </div>
  );
}

export default Character; */

/* function Character(props) {

    return (
      <div className="characterCard">
        <div className="characterImage">
          <img src={props.avatar} alt={'image '+props.name}/>
        </div>
        <div className="characterInfo">
          <h1>{props.name}</h1>
          <h3>{props.status}</h3>
          <h3>{props.specie}</h3>
          <p>{props.gender}</p>
          <p>{props.origin}</p>
        </div>
      </div>
    );
  }
  
  export default Character; */

  function CharacterCard(props) {

    const {name, status, specie, gender, origin, avatar}=props
    return (
      <div className="characterCard">
        <div className="characterImage">
          <img src={avatar} alt={'image '+name}/>
        </div>
        <div className="characterInfo">
          <h1>{name}</h1>
          <h3>{status}</h3>
          <h3>{specie}</h3>
          <p>{gender}</p>
          <p>{origin}</p>
        </div>
      </div>
    );
  }
  
  export default CharacterCard;