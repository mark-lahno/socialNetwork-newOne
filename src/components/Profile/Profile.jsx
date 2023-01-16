import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";



const Profile = () => {
  return <div>
    <div>
      <img src='https://c0.wallpaperflare.com/preview/282/489/126/beach-exotic-holiday-horizon.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>;
}

export default Profile;