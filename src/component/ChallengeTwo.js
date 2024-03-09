import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styleTwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faFire,
  faCartShopping,
  faScrewdriverWrench,
  faCertificate,

} from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";
import logo1 from "./logo1.jpg";
import logo2 from "./images (2).jpeg";
import logo3 from "./priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg";
import logo4 from "./tamara-bellis-68csPWTnafo-unsplash.jpg";
import logo5 from "./stil-D4jRahaUaIc-unsplash.jpg";
import logo6 from "./freestocks-_3Q3tsJ01nc-unsplash.jpg";


function ChallengeTwo() {
  return (
    <div className="container">
      <Container>
        <Row className="rows">
          <Col className="colums" lg={4}>
            <div>
              <button className="btn1">Menu</button>
              <button className="bar">
                <FontAwesomeIcon icon={faBars} className="bar" />
              </button>
            </div>
          </Col>
          <Col lg={5}>
            <h3>
              <FontAwesomeIcon icon={faFire} className="icon" />
              DENTYTECH
            </h3>
          </Col>

          <Col lg={3}>
            <div>
              <button className="btn1"> Log In</button>
              <button className="btn2"> Sign Up</button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text" id="first-text">
            REVOLUTIONIZING
          </Col>
          <Col id="first-text-icon">
            <div>
              <FontAwesomeIcon icon={faScrewdriverWrench} className="icons" />
              <FontAwesomeIcon icon={faCartShopping} className="icons" />
              <FontAwesomeIcon icon={faCertificate} className="icons" />
              <p className="text2"> Modern Solutions, Timeless Smiles</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="third-row">
              <button className="btn4">ASSISTANCE</button>
              <button className="icons1btn">
                <FontAwesomeIcon icon={faCartShopping} className="icons1" />
              </button>
            </div>
          </Col>
          <Col className="text">
            <div className="columns">DENTAL</div>
          </Col>
          <Col >
            <div className="columns">
            <img src={logo1} alt="my first logo" width={80} height={80} />
            <FontAwesomeIcon icon={faScrewdriverWrench} className="icon3" />

            </div>
          </Col>
          <Col className="text">CARE</Col>
        </Row>
        <Row>
          <Col  xl={10} id="logo" className="text">WITH TECHNOLOGY
            </Col>

          <Col lg={2}>         
           <div className="logo1">
            <img src={logo3} width={40} height={45}  className="icon4"/>
            <img src={logo4} width={40} height={45}  className="icon4"/>
            <img src={logo5} width={40} height={45}  className="icon4"/>
            <img src={logo6} width={40} height={45}  className="icon4"/>

            </div>

          </Col>
          
        </Row>
        <Row>
          <Col lg={4}>
            <img src={logo2} alt="my second image" width={400} height={200} />
          </Col>
          <Col>
            <button className="btn3"> GET STARTED</button>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col>Your smile, Our passion</Col>
          <Col> </Col>

          <Col lg={3}>
            <div>
              <button className="btn5">
                <FontAwesomeIcon
                  icon={faScrewdriverWrench}
                  className="icons2"
                />
              </button>
              <button className="btn5">
                <FontAwesomeIcon icon={faCartShopping} className="icons2" />
              </button>
              <button className="btn5">
                {" "}
                <FontAwesomeIcon icon={faCertificate} className="icons2" />
              </button>
              <p className="para2"> Best Start up of 2023</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChallengeTwo;
