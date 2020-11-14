import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

import "./css/Weather.css";
import { Link } from "react-router-dom";

function NotLogedin() {
    return(
        <Container fluid className="h-100">
        <Row>
          <Col></Col>
          <Col>
            <Jumbotron className="m-2 text-center">
              <h2>There was an error loading this site</h2>
              <h3>Are you loggedin?</h3>
              <Link to="/signin">
                <button className="button">Login here</button>
              </Link>
            </Jumbotron>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
}

export default NotLogedin;