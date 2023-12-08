import React from "react";
import AdminNavbar from "../../../layout/adminNavbar"
import { Outlet } from "react-router-dom";

function AdminRoot() {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
      <AdminNavbar />
    </div>
  );
}

export default AdminRoot;