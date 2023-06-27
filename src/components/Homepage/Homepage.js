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
            <Text />
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
          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
        <div>
          <Button
            onClick={() => {
              window.open(
                "https://drive.google.com/drive/my-drive?q=type:document"
              );
            }}
            className="resumebtn"
          >
            <span>Download Resume</span>
          </Button>
        </div>
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
