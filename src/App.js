import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFire } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";
import Challenge from "./component/Challenge";
import ChallengeTwo from "./component/ChallengeTwo";

function App() {
  return (
    <div>
      <Challenge />

      <p className="linebreak">To this </p>
    

      <ChallengeTwo />
    </div>
  );
}

export default App;
