import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/movie2.jpg";
import projImg2 from "../assets/img/w3.jpg";
import projImg3 from "../assets/img/game.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Movie Trailer App in Flutter",
      description: "Click to see the app",
      imgUrl: projImg1,
      link: "https://github.com/DenisaTerchescu/Movie-trailer-app/",
    },
    {
      title: "Weather API App in Flutter",
      description: "Click here to see the app",
      imgUrl: projImg2,
      link: "https://github.com/DenisaTerchescu/Weather_API_App",
    },
    {
      title: "Survival Maze Game in C++",
      description: "Click here to see the app",
      imgUrl: projImg3,
      link: "https://github.com/DenisaTerchescu/SurvivalMaze-Game/",
      
    },


  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My artistic side can be observed in my projects, which tackle different software development fields, such as mobile apps and games.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Contests</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">More</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                      <ul>
                      <h3 className="titles">Mention at 2NHack Hackathon</h3>
                          <li>The project was an AI for face-mask detection</li>
                          <li>Made use of Python and OpenCV library for facial detection algorithms</li>
                        </ul>
                     
                    
                      <ul>
                      <h3 className="titles"> SmartHack 2022</h3>
                          <li>We developed a no-coding app in 24h</li>
                          <li>Made use of Flutter and C# to build an app that comes in handy for the medical staff</li>
                        </ul>
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h2 className="titles">Volunteering</h2>
                    <br></br>
                      <ul>                
                    <h3>BEST Bucharest</h3>
                          <li>IT Responsible for BEST Career Crossover, Gamification responsible</li>
                          <li>Gained practical experience in working with people</li>
                        </ul>
                      <ul>
                      <h3> SmartHack 2022</h3>
                          <li>We developed a no-coding app in 24</li>
                          <li>Made use of Flutter and C# to build an app that comes in handy for the medical staff</li>
                        </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}