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

  /* function CharacterCard(props) {

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
  
  export default CharacterCard; */

  /* function CharacterCard(props) {

    const {name, status, specie, gender, origin, avatar}=props;
    const color={
      Male:"#76f8d2",
      Female:"#f8769c",
      Genderless:"#769cf8",
      Unknown:"#f8d276",
    };
    return (
      <div className="characterCard" style={{backgroundColor:color[gender]}}>
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
  
  export default CharacterCard; */

  function CharacterCard(props) {

    const {name, status, species, gender, origin, avatar}=props;
    const colorGender={
      Male:"#76f8d2",
      Female:"#f8769c",
      Genderless:"#769cf8",
      unknown:"#f8d276"
    };
    const colorStatus={
      unknown:"#c2c2c2",
      Alive: "#ffd700",
      Dead: "#000000"
    };
    const backgroundColor2 = colorGender[gender];
    const backgroundColor1 = colorStatus[status];
    const backgroundColorMix =
    "linear-gradient(135deg," +
    backgroundColor1 +
    " 15%, " +
    backgroundColor2 +
    " 70%)";
    return (
      <div className="characterCard" style={{background: backgroundColorMix}}>
        <div className="characterImage">
          <img src={avatar} alt={'image '+name}/>
        </div>
        <div className="characterInfo">
          <h1>{name}</h1>
          <h3>{status}</h3>
          <h3>{species}</h3>
          <p>{gender}</p>
          <p>{origin}</p>
        </div>
      </div>
    );
  }
  
  export default CharacterCard;