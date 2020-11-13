import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import FACADE from "../../facades/fetchFacade";
import HoureWheather from "./HoureWheater";
import WheatherInfo from "./WheatherInfo";

import "../css/Weather.css";

function Services() {
  const init = { lat: "", lon: "", city: "" };
  const [location, setLocation] = useState(init);
  const [meta, setMeta] = useState({ isEmpty: true });
  const [weather, setWeather] = useState({ isEmpty: true });
  const [futureWeather, setFutureWeather] = useState({ isEmpty: true });

  useEffect(() => {
    FACADE.locationFetcher()
      .then((data) => {
        const tempLocation = {
          lat: data.latitude,
          lon: data.longitude,
          city: data.city,
        };
        setLocation({ ...tempLocation });

        FACADE.weatherFetcher(tempLocation.lat, tempLocation.lon)
          .then((data) => {
            setMeta({ ...data.meta });
            setWeather({ ...data.details });
            console.log(data.details)
          })
          .catch((err) => {});
        FACADE.allWeatherFetcher(tempLocation.lat, tempLocation.lon)
          .then((data) => {
            setFutureWeather({ ...data });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid className="h-100">
      <Row className="h-100 d-md-block">
        <WheatherInfo location={location} meta={meta} weather={weather}/>
        <HoureWheather futureWeather={futureWeather} setWeather={setWeather}/>
      </Row>
    </Container>
  );
}
export default Services;
