import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./major.module.css";

const Major = (props) => {
  const majorLogo = ["upbit.png", "bithumb.png"];
  console.log(majorLogo);
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={`../images/majorLogo/${majorLogo[idx]}`}
              alt="logo"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Major;
