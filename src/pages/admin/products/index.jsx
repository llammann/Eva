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
  Text,
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

function Products() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [editProductId, setEditProductId] = useState(null);
  const [editProductName, setEditProductName] = useState("");
  const [editProductCategory, setEditProductCategory] = useState("");
  const [editProductPrice, setEditProductPrice] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios("http://localhost:3000/products").then((res) => {
      setData(res.data);
      setFilteredData(res.data);
    });
    axios("http://localhost:3000/users").then((res) => {
      setUser(res.data);
    });
  }, []);

  useEffect(() => {
    const filteredProducts = data.filter((element) => {
      const isMatchingSearchTerm =
        element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.category.toLowerCase().includes(searchTerm.toLowerCase());

      const isMatchingCategory =
        selectedCategory === "all" || element.category === selectedCategory;

      return isMatchingSearchTerm && isMatchingCategory;
    });

    setFilteredData(filteredProducts);
  }, [searchTerm, selectedCategory, data]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleEditClick = (
    productId,
    productName,
    productCategory,
    productPrice
  ) => {
    setEditProductId(productId);
    setEditProductName(productName);
    setEditProductCategory(productCategory);
    setEditProductPrice(productPrice);
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setEditProductId(null);
    setEditProductName("");
    setEditProductCategory("");
    setEditProductPrice("");
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    axios
      .put(`http://localhost:3000/products/${editProductId}`, {
        name: editProductName,
        category: editProductCategory,
        price: editProductPrice,
      })
      .then(() => {
        axios("http://localhost:3000/products").then((res) => {
          setData(res.data);
          setFilteredData(res.data);
        });

        handleEditClose();
      })
      .catch((error) => {
        console.error("Error editing product: ", error);
      });
  };

  return (
    <ChakraProvider>
      <div className="container">
        <div className="search-section">
          <Input
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <TableContainer className="productTable">
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.map((element) => (
                <Tr key={element.id}>
                  <Td>{element.id}</Td>
                  <Td>
                    <img
                      src={element.image}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Td>
                  <Td>{element.name}</Td>
                  <Td>{element.category}</Td>
                  <Td>{element.price}</Td>
                  <Td>
                    <Button
                      colorScheme="cyan"
                      onClick={() =>
                        handleEditClick(
                          element.id,
                          element.name,
                          element.category,
                          element.price
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
                          .delete(
                            `http://localhost:3000/products/${element.id}`
                          )
                          .then(() => {
                            let updatedData = data.filter(
                              (x) => x.id !== element.id
                            );
                            setData(updatedData);
                          })
                          .catch((error) => {
                            console.error("Error deleting product: ", error);
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
                placeholder="Product Name"
                value={editProductName}
                onChange={(e) => setEditProductName(e.target.value)}
              />
              <Input
                placeholder="Product Category"
                value={editProductCategory}
                onChange={(e) => setEditProductCategory(e.target.value)}
              />
              <Input
                placeholder="Product Price"
                value={editProductPrice}
                onChange={(e) => setEditProductPrice(e.target.value)}
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

export default Products;
