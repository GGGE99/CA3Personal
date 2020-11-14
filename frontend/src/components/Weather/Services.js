import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import FACADE from "../../facades/fetchFacade";
import HoureWheather from "./HoureWheater";
import WheatherInfo from "./WheatherInfo";
import NotLogedin from "../NotLogedin";


import "../css/Weather.css";
import { Link } from "react-router-dom";

function Services() {
  const init = { lat: "", lon: "", city: "" };
  const [location, setLocation] = useState(init);
  const [meta, setMeta] = useState({ isEmpty: true });
  const [weather, setWeather] = useState({ isEmpty: true });
  const [futureWeather, setFutureWeather] = useState({ isEmpty: true });
  const [bigImage, setBigImage] = useState({ isEmpty: true });
  const [error, setError] = useState("loading...");
  const [images, setImages] = useState({});

  const imageSetter = (val) => setBigImage({ ...val });

  useEffect(() => {
    if(futureWeather[0])
    setBigImage({
      src: images[futureWeather[0].data.next_1_hours.summary.symbol_code],
    })
  }, [futureWeather]);

  useEffect(() => {
    FACADE.locationFetcher()
      .then((data) => {
        setError("loading...");
        const tempLocation = {
          lat: data.latitude,
          lon: data.longitude,
          city: data.city,
        };
        setLocation({ ...tempLocation });

        FACADE.weatherFetcher(tempLocation.lat, tempLocation.lon)
          .then((data) => {
            setError("");
            setMeta({ ...data.meta });
            setWeather({ ...data.details });
          })
          .catch((err) => {
            if (err.status) {
              err.fullError.then((e) => {
                setError(e.message);
              });
            } else {
              setError("Network error");
            }
          });
        FACADE.allWeatherFetcher(tempLocation.lat, tempLocation.lon)
          .then((data) => {
            setError("");
            setFutureWeather({ ...data });
          })
          .catch((err) => {
            if (err.status) {
              err.fullError.then((e) => {
                setError(e.message);
              });
            } else {
              setError("Network error");
            }
          });
      })
      .catch((err) => console.log(err));
  }, [images]);

  useEffect(() => {
    FACADE.imageFetcher()
      .then((data) => {
        setImages({ ...data });
      })
      .catch((err) => console.log(err));
  }, []);
  if (!error) {
    return (
      <Container fluid className="h-100">
        <Row className="h-100 d-md-block">
          <WheatherInfo
            location={location}
            meta={meta}
            weather={weather}
            bigImage={bigImage}
          />
          <HoureWheather
            images={images}
            futureWeather={futureWeather}
            setWeather={setWeather}
            setBigImage={setBigImage}
          />
        </Row>
      </Container>
    );
  } else if (error === "loading...") {
    return (
      <Container fluid className="h-100">
        <Row>
          <Col></Col>
          <Col>
            <Jumbotron className="m-2 text-center">
              <h1>{error}</h1>
            </Jumbotron>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <NotLogedin/>
    );
  }
}
export default Services;
