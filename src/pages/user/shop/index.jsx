import React, { useEffect, useState } from "react";
import "../../../assets/style/Shop.scss";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import axios from "axios";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Icon, { SearchOutlined } from "@ant-design/icons";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { handleBasket } from "../../../Config/BasketSlice";
import { handleWishlist } from "../../../Config/WishlistSlice";

function Shop() {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([10, 30]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const MyBasket = useSelector((state) => state.basket.basket);
  const MyWishlist = useSelector((state) => state.wishlist.wishlist);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleBuy = (element) => {
    dispatch(handleBasket(element));
  };

  const handleWish = (element) => {
    dispatch(handleWishlist(element));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      const filteredProducts = res.data
        .filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(
          (product) =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );
      setProducts(filteredProducts);
    });
  }, [searchTerm, priceRange]);

  return (
    <>
      <section className="shop">
        <hr />
        <div className="container">
          <div className="left">
            <form action="">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button>
                <SearchOutlined
                  style={{
                    color: "white",
                  }}
                />
              </button>
            </form>

            <div className="filtering">
              <h3>Filter by Price</h3>

              <Slider
                getAriaLabel={() => "Price range"}
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => ` ${value}`}
                min={10}
                max={30}
              />

              <div className="minMax">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div className="categories">
              <h4>Categories</h4>
              <ul>
                <li>
                  Postcards <span>(6)</span>
                </li>
                <li>
                  Posters <span>(6)</span>
                </li>
              </ul>
            </div>

            <div className="recentlyViewed">
              <h3>Recently Viewed</h3>
              <div className="viewed">
                <ul>
                  <li>
                    <div className="imgWrapper">
                      <img
                        src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg"
                        alt=""
                      />
                    </div>
                    <div className="articles">
                      <h3 className="name">Poster V3</h3>
                      <span>$14.99</span>
                    </div>
                  </li>
                  <li>
                    <div className="imgWrapper">
                      <img
                        src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg"
                        alt=""
                      />
                    </div>
                    <div className="articles">
                      <h3 className="name">Poster V1</h3>
                      <span>$23.99</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right">
            <span>Home/ shop</span>
            <h1>Shop</h1>

            <div className="resultsSorting">
              <p>Showing all 12 results</p>

              <div className="sorting">
                <select name="sorting" id="sorting">
                  <option value="Default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="averageRating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="lowToHigh">Sort by price: low to high</option>
                  <option value="highToLow">Sort by price: high to low</option>
                </select>
              </div>
            </div>

            <div className="allProducts">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
                  {products.map((x) => (
                    <Grid item xs={4} key={x.id}>
                      <div className="card">
                        <div className="imgWrapper">
                          <button onClick={() => handleBuy(x)}>
                            <FontAwesomeIcon
                              icon={faBagShopping}
                              style={{ color: "#2C541D", fontSize: "15px" }}
                            />
                          </button>
                          <button
                            className="heart"
                            onClick={() => handleWish(x)}
                          >
                            {MyWishlist.find((wish) => wish.id === x.id) ? (
                              <HeartFilled />
                            ) : (
                              <HeartOutlined />
                            )}
                          </button>
                          <img src={x.image} alt="" />
                        </div>
                        <div className="article">
                          <h6 className="posters">{x.category}</h6>
                          <h4>{x.name}</h4>
                          <h5>${x.price}</h5>
                        </div>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
}

export default Shop;
