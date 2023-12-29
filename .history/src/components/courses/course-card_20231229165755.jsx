import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import courses from "../../helpers/data/courses.json";
import { FiUser, FiTrendingUp, FiMessageCircle } from "react-icons/fi";
const CourseCard = (im) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Img src={`/images/${item.image}`} alt={item.title} />
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle>
            <div>
              <FiUser /> {item.user}
            </div>
            <div>
              <FiTrendingUp /> {item.date}
            </div>
            <div>
              <FiMessageCircle /> {item.comment}
            </div>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
