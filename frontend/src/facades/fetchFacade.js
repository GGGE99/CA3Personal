import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { jokeURL as url, locationURL, base as URL } from "./settings";

function utilFetch() {
  const jokeFetcher = () => {
    const options = makeOptions("GET", true);
    return fetch(url, options).then(handleHttpErrors);
  };

  const locationFetcher = () => {
    const options = makeOptions("GET");
    return fetch(locationURL, options).then(handleHttpErrors);
  };

  const weatherFetcher = (lat, lon) => {
    const options = makeOptions("GET", true);
    return fetch(`${URL}/api/weather/${lat}/${lon}`, options).then(
      handleHttpErrors
    );
  };
  return { jokeFetcher, locationFetcher, weatherFetcher };
}
const facade = utilFetch();
export default facade;
