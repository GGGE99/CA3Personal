import { base as URL } from "./settings";
import { makeOptions, handleHttpErrors } from "./fetchUtils";

function apiFacade() {
  const setUserInfo = (info) => {
    const options = makeOptions("POST", true, info);
    return fetch(URL + "/api/user/info", options).then(handleHttpErrors);
  };

  const getUserInfo = () => {
    const options = makeOptions("GET", true);
    return fetch(URL + "/api/user/info", options).then(handleHttpErrors);
  };

  return {
    setUserInfo,
    getUserInfo,
  };
}
const facade = apiFacade();
export default facade;
