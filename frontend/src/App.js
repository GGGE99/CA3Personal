import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import facade from "./facades/LoginFacade";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
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
        <Navbar loggedIn={loggedIn} userRole={userRole} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/services">
            {" "}
            <Services />{" "}
          </Route>
          <Route path="/products" />
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
            <Profile userInfo={userInfo} setUserInfo={setUserInfo} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
