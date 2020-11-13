import facade from "../facades/LoginFacade";
import React, { useState } from "react";
import "./css/Login.css";
import { Link, useHistory } from "react-router-dom";

function Signup({ login, user, loggedIn }) {
  const init = { username: "", password1: "", password2: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [error, setError] = useState("");
  const history = useHistory();

  const performSignup = (evt) => {
    evt.preventDefault();
    if (
      loginCredentials.password1.length > 0 &&
      loginCredentials.password2.length > 0 &&
      loginCredentials.username.length > 0
    ) {
      if (loginCredentials.password1 === loginCredentials.password2) {
        facade
          .signup(loginCredentials.username, loginCredentials.password1)
          .then((data) => {
            login(loginCredentials.username, loginCredentials.password1);
            var getUrl = window.location;
            var baseUrl = getUrl.protocol + "//" + getUrl.host;

            setTimeout(() => {
              history.push((history.location.pathname = "/profile"));
              // window.location.href = baseUrl + "/profile"; //will redirect to your blog page (an ex: blog.html)
            }, 1000);
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
      } else {
        setError("Password doesn't match");
      }
    } else {
      setError("You must write in all fields");
    }
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div className="login">
      {loggedIn ? (
        <div className="signed-up">
          <div className="signed-up-content">
            <h2>You are now signed up go to profile</h2>
            <h2>(if redirected doesn't work)</h2>
            <Link to="/profile">
              <h3>Here</h3>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2>Sign-up</h2>
          <form onChange={onChange} className="form__group">
            <div className="input">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                name="username"
                id="username"
                required
              />
            </div>
            <div className="input">
              <input
                type="password"
                className="form__field"
                placeholder="Password"
                name="password1"
                id="password1"
                required
              />
            </div>
            <div className="input">
              <input
                type="password"
                className="form__field"
                placeholder="Password"
                name="password2"
                id="password2"
                required
              />
            </div>
            <button onClick={performSignup}>Sign-up</button>
          </form>
          {user !== "Loading..." ? user : <> </>}
          <p>{error}</p>
        </>
      )}
    </div>
  );
}

export default Signup;
