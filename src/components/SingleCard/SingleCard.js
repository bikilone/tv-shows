import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./SingleCard.css";

export default function SingleCard(props) {
  const { src, title, text } = props;
  const createMarkup = () => ({
    __html: text
  });
  return (
    <Col xs={6} sm={4} lg={3}>
      <Card>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text
            dangerouslySetInnerHTML={createMarkup()}
            style={{
              height: "100px",
              overflow: "hidden"
            }}
          />
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
