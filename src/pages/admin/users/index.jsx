import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./../../../assets/style/Dashboard.scss";
import "./../../../assets/style/admin/AdminHome.scss";

function Users() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editUserId, setEditUserId] = useState(null);
  const [editUsername, setEditUsername] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editBalance, setEditBalance] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("all");

  const dispatch = useDispatch();
  let myUser = JSON.parse(localStorage.getItem("user"));

  const handleLogOut = () => {
    window.localStorage.removeItem("user");
    sessionStorage.setItem("userlogin", JSON.stringify(false));
    window.location.reload();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userData = await axios.get("http://localhost:3000/users");
      setData(userData.data);
      setFilteredData(userData.data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  useEffect(() => {
    const filteredUsers = data.filter((element) => {
      const isMatchingSearchTerm =
        (element.username &&
          element.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (element.email &&
          element.email.toLowerCase().includes(searchTerm.toLowerCase()));

      const isMatchingEmail =
        selectedEmail === "all" ||
        (element.email && element.email === selectedEmail);

      return isMatchingSearchTerm && isMatchingEmail;
    });

    setFilteredData(filteredUsers);
  }, [searchTerm, selectedEmail, data]);

  const handleCategoryChange = (event) => {
    setSelectedEmail(event.target.value);
  };

  const handleEditClick = (userId, username, email, password, balance) => {
    setEditUserId(userId);
    setEditUsername(username);
    setEditEmail(email);
    setEditPassword(password);
    setEditBalance(balance);
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setEditUserId(null);
    setEditUsername("");
    setEditEmail("");
    setEditPassword("");
    setEditBalance("");
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    axios
      .put(`http://localhost:3000/users/${editUserId}`, {
        username: editUsername,
        email: editEmail,
        password: editPassword,
        balance: editBalance,
      })
      .then(() => {
        fetchData();
        handleEditClose();
      })
      .catch((error) => {
        console.error("Error editing user: ", error);
      });
  };

  return (
    <ChakraProvider>
      <div className="userNavbar">
        <h1>
          <Link to="/admin">Add Users</Link>
        </h1>
        <div>
          <ul>
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
                  <NavDropdown.Item onClick={handleLogOut}>
                    Log out
                  </NavDropdown.Item>
                  <NavDropdown.Item>
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
        <div className="search-section">
          <Input
            type="text"
            placeholder="Search users..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <TableContainer className="userTable">
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Password</Th>
                <Th>Balance</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.map((element) => (
                <Tr key={element.id}>
                  <Td>{element.id}</Td>
                  <Td>{element.username}</Td>
                  <Td>{element.email}</Td>
                  <Td>{element.password}</Td>
                  <Td>{element.balance}</Td>
                  <Td>
                    <Button
                      colorScheme="cyan"
                      onClick={() =>
                        handleEditClick(
                          element.id,
                          element.username,
                          element.email,
                          element.password,
                          element.balance
                        )
                      }
                    >
                      Edit
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      onClick={() => {
                        axios
                          .delete(`http://localhost:3000/users/${element.id}`)
                          .then(() => {
                            let updatedData = data.filter(
                              (x) => x.id !== element.id
                            );
                            setData(updatedData);
                          })
                          .catch((error) => {
                            console.error("Error deleting user: ", error);
                          });
                      }}
                      colorScheme="red"
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>

      {/* Edit Modal */}
      <Modal isOpen={isEditing} onClose={handleEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Username"
                value={editUsername}
                onChange={(e) => setEditUsername(e.target.value)}
              />
              <Input
                placeholder="Email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
              />
              <Input
                placeholder="Balance"
                value={editBalance}
                onChange={(e) => setEditBalance(e.target.value)}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveEdit}>
              Save
            </Button>
            <Button onClick={handleEditClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default Users;
