import React from "react";
import "../../pages/style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Text from "../Homepage/Text";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Resume from "./../Homepage/AnisaResume.pdf";

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
              <div>
                <a href={Resume} download>
                  <Button className="resumebtn">
                    <span>Download Resume</span>
                  </Button>
                </a>
              </div>
            </div>
            {/* Uncomment the social media buttons code
            <button
              onClick={() => {
                window.open("https://github.com/rahulvijay81");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/rahulvijay81/");
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
            */}
          </Col>
          <Col md={5} className="right-side">
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
// padding: 12px 32px;
//   font-size: 1rem;
//   text-transform: uppercase;
//   background: rgb(248, 217, 15);
//   color: #222;
//   border: 1px solid #fff;
//   font-weight: 600;
//   cursor: pointer;
