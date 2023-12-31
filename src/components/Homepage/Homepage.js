import React from "react";
import "../../pages/style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Text from "../Homepage/Text";
import Resume from "./../Homepage/Anisa_Zh.pdf";
import image from "../../Assets/me.png";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hi! I am Anisa <span className="wave"> </span>
            </h2>
            <span></span>
            <div className="left-side">
              <Text />
              <div className="btn">
                <a href={Resume} download>
                  <Button className="resumebtn">
                    <span>Download Resume</span>
                  </Button>
                </a>
              </div>
            </div>
          </Col>
          <Col md={5} className="right-side">
            <div className="imagedeveloper">
              {" "}
              <img src={image} alt="Anisa"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
