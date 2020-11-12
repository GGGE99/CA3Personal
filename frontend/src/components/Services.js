import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import FACADE from "../facades/fetchFacade";
import "./css/Weather.css";


function Services() {
  const init = { lat: "", lon: "", city: "" };
  const [location, setLocation] = useState(init);
  const [meta, setMeta] = useState({ isEmpty: true });
  const [weather, setWeather] = useState({ isEmpty: true });

  useEffect(
    () =>
      FACADE.locationFetcher()
        .then((data) => {
          const tempLocation = {
            lat: data.lat,
            lon: data.lon,
            city: data.city,
          };
          FACADE.weatherFetcher(tempLocation.lat, tempLocation.lon)
            .then((data) => {
              console.log(data);
              setMeta({ ...data.meta });

              setWeather({ ...data.details });
              console.log(meta);
              console.log(weather);
            })
            .catch((err) => {});
          setLocation({ ...tempLocation });
        })
        .catch((err) => console.log(err)),
    []
  );

  return (
//     <Container className="p-3">
//     <Jumbotron>
//       <h1 className="header">Welcome To React-Bootstrap</h1>

//     </Jumbotron>
//   </Container>
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col>
          <Jumbotron className="mt-3 p-1 text-center">
            <h1 className="pd-0">Weather for city {location.city}</h1>
            {Object.entries(weather).map(([key, value]) => {
              return (
                <h2>
                  {key.replaceAll("_", " ")} = {value}
                  {meta[key]}{" "}
                </h2>
              );
            })}
          </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default Services;
