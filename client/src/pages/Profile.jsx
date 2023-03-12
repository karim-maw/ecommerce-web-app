import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms";

const Profile = () => {
  const user = useRecoilValue(userState);
  console.log(user)
  return (
    <div>
      <h1>{user.username}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Profile;
