import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import FACADE from "../facades/fetchFacade";
import "./css/Weather.css";

function Services() {
  const init = { lat: "", lon: "", city: "" };
  const [location, setLocation] = useState(init);
  const [meta, setMeta] = useState({ isEmpty: true });
  const [weather, setWeather] = useState({ isEmpty: true });
  const [futureWeather, setFutureWeather] = useState([]);

  useEffect(() => {
    FACADE.locationFetcher()
      .then((data) => {
        const tempLocation = {
          lat: data.lat,
          lon: data.lon,
          city: data.city,
        };
        setLocation({ ...tempLocation });

        FACADE.weatherFetcher(tempLocation.lat, tempLocation.lon)
          .then((data) => {
            setMeta({ ...data.meta });
            setWeather({ ...data.details });
          })
          .catch((err) => {});
        FACADE.allWeatherFetcher(tempLocation.lat, tempLocation.lon)
          .then((data) => {
            setFutureWeather([...data]);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col>
          <Row className="justify-content-md-center">
            {futureWeather.map((element, index) => {
              return (
                <Jumbotron className="m-1 p-1 ">
                    <h1>{index +1 }</h1>
                </Jumbotron>
              );
            })}
          </Row>
        </Col>
        <Col>
          <Jumbotron className="mt-3 p-1 ">
            <h1 className="pd-0 text-center">
              Weather in {location.city} now:
            </h1>
            {Object.entries(weather).map(([key, value]) => {
              return (
                <h2 className="ml-3">
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
