import React from "react";
import UserNavbar from "../../../layout/userNavbar";
import { Outlet } from "react-router-dom";
import UserFooter from "../../../layout/userFooter";

function UserRoot() {
  return (
    <div>
      <UserNavbar />
      <Outlet />
      <UserFooter />
    </div>
  );
}

export default UserRoot;
