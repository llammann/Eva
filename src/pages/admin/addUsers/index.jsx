// AddUsers.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "./../../../assets/style/admin/AdminHome.scss";

function AddUsers() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(""); // Tek bir değer
  const [email, setEmail] = useState(""); // Tek bir değer

  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <ChakraProvider>
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