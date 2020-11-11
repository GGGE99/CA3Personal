import React, { useState, useEffect } from "react";
import FACADE from "../facades/userFacade";

import "./css/Profile.css";

function Profile() {
  const init = {
    FristName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Country: "",
    City: "",
    Address: "",
  };
  const [userInfo, setUserInfo] = useState(init);

  const onSubmit = (evt) => {
    evt.preventDefault();
    FACADE.setUserInfo(userInfo).then(data => {}).catch(err=>{})
  };
  const onChange = (evt) => {
    setUserInfo({
      ...userInfo,
      [evt.target.id]: evt.target.value,
    });
  };
  return (
    <div>
      <form className="profile-info" onChange={onChange} >
        <input type="input" id="FristName" placeholder="First name" />
        <input type="input" id="LastName" placeholder="Last name" />
        <input type="input" id="Email" placeholder="Email" />
        <input type="input" id="Phone" placeholder="Phone" />
        <input type="input" id="Country" placeholder="Country" />
        <input type="input" id="City" placeholder="City" />
        <input type="input" id="Address" placeholder="Address" />
        <button onClick={onSubmit}>Save</button>
      </form>
    </div>
  );
}

export default Profile;
