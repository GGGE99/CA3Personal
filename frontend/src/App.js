import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import facade from "./facades/LoginFacade";
import Jokes from "./components/Jokes";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Services from "./components/Weather/Services";
import FACADE from "./facades/userFacade";

function App() {
  const [user, setUser] = useState("Loading...");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState([]);

  const init = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
  };
  const [userInfo, setUserInfo] = useState(init);

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    if (facade.getToken()) {
      const tokenUser = parseJwt(facade.getToken());

      setUser(tokenUser.sub);
      setUserRole([...tokenUser.roles.split(",")]);
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    FACADE.getUserInfo()
      .then((data) => {
        setUserInfo(data);
      })
      .catch((err) => console.log(err));
  }, [loggedIn]);

  const login = (user, pass) => {
    facade
      .login(user, pass)
      .then((res) => {
        setLoggedIn(true);
      })
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => {
            setUser(e.message);
          });
        } else {
          console.log("Network error");
        }
      });
  };

  const logout = () => {
    facade.logout();
    setUser("Loading...");
    setLoggedIn(false);
    setUserRole([]);
  };

  return (
    <>
      <Router>
        <Navbar loggedIn={loggedIn} userRole={userRole} logout={logout} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/jokes">
            <Jokes loggedIn={loggedIn} />
          </Route>
          <Route path="/signin">
            <Login
              userRole={userRole}
              setUserRole={setUserRole}
              login={login}
              setUser={setUser}
              user={user}
              loggedIn={loggedIn}
              logout={logout}
              setLoggedIn={setLoggedIn}
            />
          </Route>
          <Route path="/signup">
            <Signup
              userRole={userRole}
              setUserRole={setUserRole}
              login={login}
              setUser={setUser}
              user={user}
              loggedIn={loggedIn}
              logout={logout}
              setLoggedIn={setLoggedIn}
            />
          </Route>
          <Route path="/profile">
            <Profile
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              loggedIn={loggedIn}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
