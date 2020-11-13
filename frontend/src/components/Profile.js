import React, { useState, useEffect } from "react";
import FACADE from "../facades/userFacade";

import "./css/Profile.css";

function Profile({ userInfo, setUserInfo }) {
  const [user, setUser] = useState({ isEmpty: true });
  const [newUserInfo, setNewUserInfo] = useState({ ...userInfo });
  const [error, setError] = useState("");

  useEffect(() => {
    setNewUserInfo({ ...userInfo });
  }, [userInfo]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    FACADE.setUserInfo(newUserInfo)
      .then((data) => setUser(data))
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => {
            setError(e.message);
          });
        } else {
          setError("Network error");
        }
      });
  };
  const handleChange = (evt) => {
    setUserInfo({
      ...userInfo,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div className="profile-info">
      {user.isEmpty ? (
        <form onSubmit={onSubmit}>
          <input
            type="input"
            id="firstName"
            placeholder="First name"
            value={userInfo.firstName || ""}
            onChange={handleChange}
          />
          <input
            type="input"
            id="lastName"
            placeholder="Last name"
            value={userInfo.lastName || ""}
            onChange={handleChange}
          />
          <input
            type="input"
            id="email"
            placeholder="Email"
            value={userInfo.email || ""}
            onChange={handleChange}
          />
          <input
            type="input"
            id="phone"
            placeholder="Phone"
            value={userInfo.phone || ""}
            onChange={handleChange}
          />
          <input
            type="input"
            id="country"
            placeholder="Country"
            value={userInfo.country || ""}
            onChange={handleChange}
          />
          <input
            type="input"
            id="city"
            placeholder="City"
            value={userInfo.city || ""}
            onChange={handleChange}
          />
          <input
            type="input"
            id="address"
            placeholder="Address"
            value={userInfo.address || ""}
            onChange={handleChange}
          />
          <button>Save</button>
          <p style={{ color: "red" }}>{error}</p>
        </form>
      ) : (
        <div className="info-saved">
          <h1 style={{ color: "green" }}>Info has been saved</h1>
          <button onClick={() => setUser({ isEmpty: true })}>Edit again</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
