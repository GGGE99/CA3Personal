import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import FACADE from "../../facades/fetchFacade";
import "../css/Weather.css";

function WheatherInfo({ location, weather, meta }) {
    const [locationToShow, setLocation] = useState({...location});
    const [metaShow, setMeta] = useState({ ...weather});
    const [weatherShow, setWeather] = useState({ ...meta });

    useEffect(() => setLocation({...location}), [location])
    useEffect(() => setWeather({...weather}), [weather])
    useEffect(() => setMeta({...meta}), [meta])


  if (location.isEmpty && weather.isEmpty && meta.isEmpty) {
      return(<></>)
  } else {
      console.log(location + ", " + meta + ", "+ weather)
    return (
      <Col
        xs={{ order: 100 }}
        md={4}
        className="h-100 float-left p-1"
        style={{ height: 100 + "%" }}
      >
        <Jumbotron className="pt-3 mt-1 h-100 jumbotron-main">
          <h1 className="pd-0 text-center">Weather in {locationToShow.city} now:</h1>
          {Object.entries(weatherShow).map(([key, value]) => {
            return (
              <h2 className="ml-3">
                {key.replaceAll("_", " ")} = {value}
                {metaShow[key]}{" "}
              </h2>
            );
          })}
        </Jumbotron>
      </Col>
    );
  }
}

export default WheatherInfo;
