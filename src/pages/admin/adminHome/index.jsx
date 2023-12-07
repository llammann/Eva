import { useState, useEffect } from "react";
import axios from "axios";
import "./../../../assets/style/admin/AdminHome.scss";
import { Outlet } from "react-router-dom";

function AdminHome() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/products").then((res) => {
      setData(res.data);
    });
    axios("http://localhost:3000/users").then((res) => {
      setUser(res.data);
    });
  }, []);

  return <Outlet />;
}

export default AdminHome;
