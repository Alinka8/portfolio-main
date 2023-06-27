import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              Front End Engineer with 3+ years of industry experience.
              Goal-oriented, results-driven with a strong commitment to
              detail-focused collaboration. Dedicated to building and optimizing
              user-focused websites. Committed to high standards of web design,
              user experience and collaborating effectively in a team setting.
              Valuable asset for delivering exceptional results.
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <li>HTML5/CSS3</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Bootsrap 5</li>
                </Col>
                <Col md={5}>
                  <li>React Js</li>
                  <li>Redux Js</li>
                  <li>React-Bootsrap</li>
                  <li>Material-ui</li>
                  <li>Git/Github</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
