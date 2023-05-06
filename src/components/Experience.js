import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Accordion from 'react-bootstrap/Accordion';

export const Experience = () => {

  return (
    <section className="experience" id="experience">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Work experience</h1>
                  <br></br>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" >
                      <Accordion.Header ><h2>Android Developer at Deutsche Bank</h2></Accordion.Header>
                      <Accordion.Body className="fontItems">
                      <ul>
                      <h5>From September 2022 up to now</h5>
                          <li>Developed features for the mobile bank app in Kotlin</li>
                          <li>Gained valuable experience in teamworking and coding</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" >
                      <Accordion.Header ><h2>Software Engineer Intern at Keysight</h2></Accordion.Header>
                      <Accordion.Body className="fontItems">
                      <ul>
                      <h5>From July 2022 to September 2022</h5>
                          <li>Acquired the fundamentals of Go programming, while using concepts about Kubernetes</li>
                          <li>Built a software program in Go that automatically converts production code to documentation used in Swagger</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" >
                      <Accordion.Header><h2>Software Developer Intern at Deutsche Bank</h2></Accordion.Header>
                      <Accordion.Body className="fontItems">
                        <ul>
                        <h5>From March 2022 to July 2022</h5>
                          <li>Developed web applications using Java, JavaScript, React or Angular</li>
                          <li>Created a mobile application in Swift for events management, within a team of 6 people</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}