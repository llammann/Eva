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
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";

function AddUsers() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  let myUser = JSON.parse(localStorage.getItem("user"));
  const handleLogOut = () => {
    window.localStorage.removeItem("user");
    sessionStorage.setItem("userlogin", JSON.stringify(false));
    window.location.reload();
  };

  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <ChakraProvider>
      <div className="userNavbar">
        <h1>
          <Link to="/admin">Add Users</Link>
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
            placeholder="Enter the new username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Enter the new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Enter the new balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
          <Input
            placeholder="Enter the new email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            colorScheme="teal"
            onClick={() => {
              let user = {
                username: username,
                password: password,
                balance: balance,
                email: email,
              };
              setUsername("");
              setPassword("");
              setBalance("");
              setEmail("");
              axios.post("http://localhost:3000/users", user).then((res) => {
                setData([...data, res.data]);
              });
            }}
          >
            Add User
          </Button>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default AddUsers;
