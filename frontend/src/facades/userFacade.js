import { loginURL as URL } from "./settings";
import { makeOptions, handleHttpErrors } from "./fetchUtils";

function apiFacade() {
  const setUserInfo = (info) => {
    const options = makeOptions("POST", true, {
        firstName: info.FristName,
        lastName: info.LastName,
        email: info.Email,
        phone: info.Phone,
        country: info.Country,
        city: info.City,
        address: info.Address,
    });
    return fetch(URL + "/api/user/info", options).then(handleHttpErrors);
  };

  return {
    setUserInfo,
  };
}
const facade = apiFacade();
export default facade;
