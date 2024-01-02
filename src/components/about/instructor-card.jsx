import React from "react";
import "./instructor-card.scss";
import { Card } from "react-bootstrap";

const InstructorCard = ({ firstName, lastName, image, title }) => {
  return (
    <Card>
      <div className="image">
        {" "}
        <Card.Img src={`/images/instructors/${image}`} />
        <Card.Title>
          <h4>
            {firstName} {lastName}
          </h4>
          <h6>{title}</h6>
        </Card.Title>
      </div>{" "}
    </Card>
  );
};

export default InstructorCard;
