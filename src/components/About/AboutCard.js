import React from "react";
import Card from "react-bootstrap/Card";
import { 
  FaDumbbell, 
  FaPlaneDeparture, 
  FaCamera, 
  FaDog 
} from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! My name is <span className="blue">Ryan Peart, </span>
            and I currently live in <span className="blue"> New York City.</span>
            <br />
            I am currently employed as a Data Engineering Senior Analyst at Accenture.
            <br />
            <br />
            I was born and raised in Seattle, Washington.
            <br />
            I went to the University of Washington to receive my Bachelors of Science in Informatics.
            <br />
            <br />
            Apart from work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaDumbbell /> Exercising
            </li>
            <li className="about-activity">
              <FaPlaneDeparture /> Travelling
            </li>
            <li className="about-activity">
              <FaCamera /> Photography
            </li>
            <li className="about-activity">
              <FaDog /> Rover Dog Sitting
            </li>
          </ul>

          <p style={{ color: "rgb(64 161 206)" }}>
            "Live every day like it is your last!"{" "}
          </p>
          <footer className="blockquote-footer">Ryan Peart</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
