import { Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span><a href ={link}>{description}</a> <ArrowRightCircle size={15} /></span>
        </div>
      </div>
    </Col>
  )
}