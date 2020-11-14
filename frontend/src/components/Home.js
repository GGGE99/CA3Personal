import React from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col>
          <Jumbotron className="mt-2">
            <h1 className="text-center">Description </h1>
            <h2>Frontend:</h2>
            <ul className="ml-5">
              <li>
                Har brugt starte koden som skabelon til at sætte projektet
                hurtigt op
              </li>
              <li>Har brugt login og sign-up komponenter fra start koden</li>
              <li>Har brugt css login og sign-up til at lave profileinfo siden</li>
            </ul>
            <h2>Backend:</h2>
            <ul className="ml-5">
              <li>Brugere det der er bygget op omkring users og tilføjet til det</li>
              <li>Har brugt security delen til at sætte endpoints til kun at kunne til gås af bestemte roller</li>
              <li>Har også brugt security delen til at finde den user der tilgår endpointet</li>
            </ul>
          </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    // <div className="text-center">
    //     <p>Hej</p>
    // </div>
  );
}

export default Home;
