import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Col } from "react-bootstrap";
import FACADE from "../../facades/fetchFacade";
import "../css/Weather.css";

function HoureWheather({ futureWeather, setWeather, setBigImage, images }) {
  const [imagesToShow, setImagesToShow] = useState({});

  useEffect(() => setImagesToShow({...images}) , [images]);

  const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday",
  };

  const click = (val) => {
    setWeather(val.instant.details);
    setBigImage({ src: images[val.next_1_hours.summary.symbol_code] })
  };

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
                      <p>
                        {days[day]}
                        <br />
                        {time}
                      </p>
                      <img
                        className="wheather-img"
                        src={images[nextHoure.summary.symbol_code]}
                      />
                      <Button onClick={() => click(value1)}>See details</Button>
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
