import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ol>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/characters">Characters</Link>
      </li>
      <li>
        <Link to="/episodes">Episodes</Link>
      </li>
    </ol>
  );
}

export default Navigation;
