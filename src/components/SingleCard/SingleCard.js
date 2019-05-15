import React from "react";
import { Card, Button, Col } from "react-bootstrap";

export default function SingleCard(props) {
  const { src, title, text } = props;
  const createMarkup = () => ({
    __html: text
  });
  return (
    <Col
      xs={{ span: 8, offset: 2 }}
      sm={{ span: 6, offset: 0 }}
      md={4}
      lg={4}
      xl={3}
    >
      <Card style={{ marginBottom: "5px" }}>
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
