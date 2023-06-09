import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github-mark-white.svg";
import instagramIcon from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={17} className="text-center text-sm-end">
            
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/denisa-terchescu-6039641a5/"><img src={linkedinIcon} alt="Icon" /></a>
              <a href="https://github.com/DenisaTerchescu/"><img src={githubIcon} alt="Icon" /></a>
              <a href="https://www.instagram.com/denisa.terchescu/"><img src={instagramIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}