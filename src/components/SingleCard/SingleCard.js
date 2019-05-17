import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SingleCard(props) {
  const { src, title, text, saveToLibrary, id, fill } = props;
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
          <Button variant="primary">
            <Link to={`/${id}`}>Details</Link>
          </Button>
          <IoIosStar
            style={{
              float: "right",
              color: "white",
              stroke: "blue",
              strokeWidth: "3px",
              cursor: "pointer"
            }}
            size="2em"
            fill={fill}
            onClick={() => saveToLibrary({ id, image: src, title, text })}
          />
        </Card.Body>
      </Card>
    </Col>
  );
}
