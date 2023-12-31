import React from "react";
import { Card } from "react-bootstrap";
import "./course-card.scss";
import { FiUser, FiTrendingUp, FiMessageCircle } from "react-icons/fi";
const CourseCard = ({ image, title, user, date, comment }) => {
  return (
    <div>
      <Card className="course-card">
        <Card.Body>
          <div className="image">
            <Card.Img src={`/images/${image}`} alt={title} />
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>
            <div>
              <FiUser /> {user}
            </div>
            <div>
              <FiTrendingUp /> {date}
            </div>
            <div>
              <FiMessageCircle /> {comment}
            </div>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
