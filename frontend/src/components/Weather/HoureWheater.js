import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import FACADE from "../../facades/fetchFacade";
import "../css/Weather.css";

function HoureWheather({ futureWeather, setWeather }) {
  const [images, setImages] = useState({});

  useEffect(() => {
    FACADE.imageFetcher()
      .then((data) => {
        setImages({ ...data });
      })
      .catch((err) => console.log(err));
  }, []);

  const days = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
  };

  const click = (val) => {
    setWeather(val)
  }

  return (
    <>
      {Object.entries(futureWeather).map(([key, value], index) => {
        return (
          <>
            {Object.entries(value).map(([key1, value1]) => {
              const nextHoure = value1.next_1_hours;
              const date = new Date(value.time);
              const day = date.getDay();
              const time =
                (date.getHours() < 10 ? "0" : "") +
                date.getHours() +
                ":" +
                (date.getMinutes() < 10 ? "0" : "") +
                date.getMinutes();
              if (nextHoure) {
                return (
                  <Col xs={{ order: 0 }} md={1} className="float-left h-50 p-1">
                    <Jumbotron className="pt-2 mt-1 h-100 text-center">
                      <p></p>
                      <p>{days[day]}<br/>{time}</p>
                      <img
                        className="wheather-img"
                        src={images[nextHoure.summary.symbol_code]}
                      />
                      <button onClick={() => click(value1.instant.details)}>See details</button>
                    </Jumbotron>
                  </Col>
                );
              } else return <></>;
            })}
          </>
        );
      })}
    </>
  );
}

export default HoureWheather;
