import React from "react";
import { ProfileProps } from "@types";

const Profile = ({
  name,
  desc,
  data,
  handleDelete,
  handleEdit,
}: ProfileProps) => {
  console.log("data from api", data);
  return <div>{name}</div>;
};

export default Profile;
