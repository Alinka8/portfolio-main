import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import useradminpanel from "../../Assets/daycare.png";
import olximage from "../../Assets/shop.png";
import netfliximage from "../../Assets/spy game.png";
import gridlinesbuilders from "../../Assets/Gridlinesbuilders.png";
import todolist from "../../Assets/todolist.png";

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
                ghLink="https://helenlucydaycare.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Online Store"
                ghLink="https://myperfectstore.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Spy Game"
                ghLink="https://spygame.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Grid Line Builders"
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                ghLink="https://todolist-rahul81.netlify.app/"
              />
            </Col>
            <Col>
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="400"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTL4ZW14DDKjvK8ozSb7A4s%2FDEALERSHIP%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D5-20557%26viewport%3D543%252C361%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A20557%26mode%3Ddesign"
                allowfullscreen
              ></iframe>
            </Col>
            <Col>
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="400"
                height="450"
                src="https://www.figma.com/proto/qHknjzb641DWUzx5jh6T58/SpyGame?embed_host=share&kind=&node-id=2-2&page-id=0%3A1&scaling=scale-down"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
