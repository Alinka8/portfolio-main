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
            <div className="aboutdetails">
              <p>
                I am an enthusiastic and creative front-end developer who is
                passionate about exploring new concepts and pushing boundaries.
                The passion for creativity and problem-solving was instilled in
                me by my parents from a young age. They taught me valuable life
                lessons, emphasizing that every challenge we encounter serves to
                strengthen us. Their unwavering belief in my abilities has
                taught me to fearlessly tackle new heights, confronting any fear
                that may arise, as it is through these experiences that we truly
                grow. Front-end development provides me with the perfect
                platform to express my innovative ideas and transform them into
                tangible user experiences. Through coding, I can weave together
                design and functionality, shaping websites and applications that
                captivate and engage users.
              </p>
              <p>
                As I embark on this journey, I am eager to collaborate with
                like-minded individuals who share my passion for innovation. I
                am excited to embrace challenges, knowing that they serve as
                stepping stones for my personal and professional growth.
              </p>
            </div>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={3}>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Git</li>
                </Col>
                <Col md={3}>
                  <li>NodeJs</li>
                  <li>GitHub</li>
                  <li>Material-ui</li>
                  <li>Figma</li>
                  <li>Webpack</li>
                </Col>
                <Col md={3}>
                  <li>RESTful Apis</li>
                  <li>NPM</li>
                  <li>VSCode</li>
                  <li>Yarn</li>
                  <li>Firebase</li>
                  <li>Angular</li>
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
