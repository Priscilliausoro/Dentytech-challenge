import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import './style.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFire, faScrewdriverWrench, faCertificate, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";



function Challenge() {
  return (
    <div className="container">
      <Container>
        <Row className="rows">
        <Col className="colums" lg={4}>
            <div>
              <button className="btn1">Menu</button>
              <button className="bar">
        
                <FontAwesomeIcon icon={faBars} className="bars" />
              </button>
            </div>
         
          </Col>

          <Col>
            <h3>
              <FontAwesomeIcon icon={faFire}  className="icon"/>
              DENTYTECH
            </h3>
          </Col>
          <Col>
            <div>
              <button className="btn1"> Log In</button>
              <button className="btn2"> Sign Up</button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={2}> </Col>
          <Col className="text" id="first-text">
            REVOLUTIONIZING
          </Col>
        </Row>

        <Row>
          <Col className="text"> DENTAL CARE</Col>
        </Row>
        <Row>
          <Col lg={2}> </Col>

          <Col className="text">WITH TECHNOLOGY</Col>
        </Row>
        <Row>
          <Col>
            <button className="btn3"> GET STARTED</button>
          </Col>
        </Row>
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

export default Challenge;
