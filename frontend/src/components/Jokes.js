import facade from "../facades/fetchFacade";
import React, { useState, useEffect } from "react";
import "./css/Home.css";
import NotLogedin from "./NotLogedin";

export default function Home({ loggedIn }) {
  const [dataFromServer, setDataFromServer] = useState({ isEmpty: true });
  useEffect(() => {
    facade.jokeFetcher().then((data) => setDataFromServer(data));
  }, []);

  if (loggedIn) {
    return (
      <div className="content">
        <h1 className="jokes">Jokes</h1>
        {dataFromServer.isEmpty ? (
          <p>Loading..</p>
        ) : (
          <>
            <h3 className="jokes">{dataFromServer.joke1}</h3>
            <h3 className="jokes">{dataFromServer.joke2}</h3>
            <h3 className="jokes">{dataFromServer.joke3}</h3>
            <h3 className="jokes">{dataFromServer.joke4}</h3>
            <h3 className="jokes">{dataFromServer.joke5}</h3>
          </>
        )}
      </div>
    );
  } else {
    return(<NotLogedin/>)
  }
}
