import React, { useState, useEffect } from "react";
import FACADE from "../facades/userFacade";

import "./css/Profile.css";

function Profile({userInfo, setUserInfo}) {
  const [newUserInfo, setNewUserInfo] = useState({ ...userInfo });



  useEffect(() => {
    setNewUserInfo({ ...userInfo })
  }, [userInfo]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    FACADE.setUserInfo(newUserInfo)
      .then((data) => {})
      .catch((err) => {});
  };
  const handleChange = (evt) => {
    setUserInfo({
      ...userInfo,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <form className="profile-info" onSubmit={onSubmit}>
        <input
          type="input"
          id="firstName"
          placeholder="First name"
          value={userInfo.firstName|| ""}
          onChange={handleChange}
        />
        <input type="input" id="lastName" placeholder="Last name" value={userInfo.lastName || ""} onChange={handleChange} />
        <input type="input" id="email" placeholder="Email" value={userInfo.email || ""} onChange={handleChange}/>
        <input type="input" id="phone" placeholder="Phone" value={userInfo.phone || ""} onChange={handleChange}/>
        <input type="input" id="country" placeholder="Country" value={userInfo.country || ""} onChange={handleChange}/>
        <input type="input" id="city" placeholder="City" value={userInfo.city || ""} onChange={handleChange}/>
        <input type="input" id="address" placeholder="Address" value={userInfo.address || ""}onChange={handleChange}/>
        <button>Save</button>
      </form>
    </div>
  );
}

export default Profile;
