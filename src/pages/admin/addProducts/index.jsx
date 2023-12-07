import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "./../../../assets/style/admin/AdminHome.scss";

function AddProducts() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <ChakraProvider>
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
