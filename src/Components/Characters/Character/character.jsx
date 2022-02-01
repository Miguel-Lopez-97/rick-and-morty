import "./character.css";


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
          <p>{gender==="unknown"?"gender: unknown":gender}</p>
          <p>{origin==="unknown"?"origin: unknown":"Planet: "+origin}</p>
        </div>
      </div>
    );
  }
  
  export default CharacterCard;