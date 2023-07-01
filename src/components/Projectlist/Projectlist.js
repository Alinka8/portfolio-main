import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import useradminpanel from "../../Assets/daycare.png";
import olximage from "../../Assets/shop.png";
import netfliximage from "../../Assets/spy game.png";
import dealer from "../../Assets/cardealer.jpg";
import spy from "../../Assets/spy game (2).png";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Helen Lucy Daycare"
                description="Discover a charming Chicago daycare website, powered by front-end technologies."
                ghLink="https://helenlucydaycare.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Online Store"
                description="Explore a fully functional and visually captivating online store powered by JavaScript, React, CSS, and HTML."
                ghLink="https://myperfectstore.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Spy Game"
                description="Dive into the thrilling world of espionage with my captivating spy game website."
                ghLink="https://spygame.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={dealer}
                isBlog={false}
                title="Car Dealership"
                description="Figma project of car dealership mobile website."
                ghLink="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTL4ZW14DDKjvK8ozSb7A4s%2FDEALERSHIP%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D5-20557%26viewport%3D543%252C361%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A20557%26mode%3Ddesign"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={spy}
                isBlog={false}
                title="Secret Spy"
                description="Figma project of Secret spy mobile website."
                ghLink="https://www.figma.com/proto/qHknjzb641DWUzx5jh6T58/SpyGame?embed_host=share&kind=&node-id=2-2&page-id=0%3A1&scaling=scale-down"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
