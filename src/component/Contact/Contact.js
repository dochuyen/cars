import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classNames from "classnames/bind";
import styles from "./Contact.scss";
const cx = classNames.bind(styles);
const Contact = () => {
  return (
    <div className={cx("wrapper")}>
      <h1>Contatti & Info</h1>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            xs=12 md=8
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col xs={6}>xs=6</Col>
          <Col xs={6}>xs=6</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
