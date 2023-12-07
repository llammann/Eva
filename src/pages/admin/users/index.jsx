import { useState, useEffect } from "react";
import axios from "axios";
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userData = await axios("http://localhost:3000/users");
      setData(userData.data);
      setFilteredData(userData.data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  useEffect(() => {
    const filteredUsers = data.filter((element) => {
      const isMatchingSearchTerm =
        element.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.email.toLowerCase().includes(searchTerm.toLowerCase());

      const isMatchingEmail =
        selectedEmail === "all" || element.email === selectedEmail;

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
