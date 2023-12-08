import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "./../../../assets/style/admin/AdminHome.scss";
import { Link } from "react-router-dom";
import "./../../../assets/style/Dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";

function AddProducts() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [user, setUser] = useState([]);

  const dispatch = useDispatch();
  let myUser = JSON.parse(localStorage.getItem("user"));
  const handleLogOut = () => {
    window.localStorage.removeItem("user");
    sessionStorage.setItem("userlogin", JSON.stringify(false));
    window.location.reload();
  };

  useEffect(() => {
    axios("http://localhost:3000/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <ChakraProvider>
      <div className="userNavbar">
        <h1>
          <Link to="/admin">Add Products</Link>
        </h1>
        <div>
          <ul>
            {/* <li>
                <Link to="/admin">Dashboard</Link>
              </li> */}
            <li>
              <Link to="/admin/addProducts">Add Products</Link>
            </li>
            <li>
              <Link to="/admin/products">Products</Link>
            </li>
            <li>
              <Link to="/admin/users">Users</Link>
            </li>
            <li>
              <Link to="/admin/addUsers">Add Users</Link>
            </li>

            <li>
              {myUser ? (
                <NavDropdown title={myUser.username} id="basic-nav-dropdown">
                  <NavDropdown.Item
                    onClick={handleLogOut}
                    style={{
                      lineHeight: "0",
                      margin: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    Log out
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    style={{
                      lineHeight: "0",
                      margin: "10px",
                    }}
                  >
                    <Link to="/profile">User Profile</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "#2C541D", fontSize: "20px" }}
                  />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="addProduct">
          <Input
            placeholder="Enter the new product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Enter the new product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            placeholder="Enter the new product category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button
            colorScheme="teal"
            onClick={() => {
              let prod = {
                name: name,
                price: price,
                category: category,
              };
              setName("");
              setPrice("");
              setCategory("");
              axios.post("http://localhost:3000/products", prod).then((res) => {
                setData([...data, res.data]);
              });
            }}
          >
            Add Product
          </Button>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default AddProducts;
