import React, { useEffect, useState } from "react";
import "../../../assets/style/Home.scss";
import UserFooter from "../../../layout/userFooter";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { render } from "react-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faLock,
  faBox,
  faHand,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Products from "../../admin/products";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const MyWishlist = useSelector((state) => state.wishlist.wishlist);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      const firstThreeProducts = res.data.slice(0, 3);
      setProducts(firstThreeProducts);

      console.log(firstThreeProducts);
    });
  }, []);

  return (
    <>
      <section className="mountainImg">
        <div>
          <h1>EARTH</h1>
          <h4>MULTIPURPOSE STORE</h4>
          <button>
            <Link to="shop" style={{ textDecoration: "none", color: "white" }}>
              SHOP NOW
            </Link>
          </button>
        </div>
      </section>

      <section className="homeCards">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
              {products.map((x) => (
                <Grid item xs={4} key={x.id}>
                  <div className="card1">
                    <div className="imgWrapper">
                      <button>
                        <FontAwesomeIcon
                          icon={faBagShopping}
                          style={{ color: "#2C541D", fontSize: "15px" }}
                        />
                      </button>

                      <button className="heart">
                        {MyWishlist &&
                        MyWishlist.find((wish) => wish.id === x.id) ? (
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
      </section>

      <hr />

      <section className="comments">
        <div className="container">
          <h1>What Our Customers Say</h1>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, md: 12 }} spacing={9}>
              <Grid item xs={4}>
                <div className="box">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size={"2x"}
                    style={{ color: "#2C541D" }}
                  />
                  <p>
                    Fast shipping and excellent customer service. The product
                    was even better than expected. I will definitely be a
                    returning customer.
                  </p>
                  <div className="imgWrapper">
                    <img
                      src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonial-avatar-img.jpeg"
                      alt=""
                    />
                  </div>
                  <span>JENNIFER LEWIS</span>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="box">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size={"2x"}
                    style={{ color: "#2C541D" }}
                  />
                  <p>
                    Great user experience on your website. I found exactly what
                    I was looking for at a great price. I will definitely be
                    telling my friends.
                  </p>
                  <div className="imgWrapper">
                    <img
                      src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonials-avatar-img-2.jpeg"
                      alt=""
                    />
                  </div>
                  <span>ALICIA HEART</span>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="box">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size={"2x"}
                    style={{ color: "#2C541D" }}
                  />
                  <p>
                    Thank you for the excellent shopping experience. It arrived
                    quickly and was exactly as described. I will definitely be
                    shopping with you again in the future.
                  </p>
                  <div className="imgWrapper">
                    <img
                      src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonials-avatar-img-1.jpeg"
                      alt=""
                    />
                  </div>
                  <span>JUAN CARLOS</span>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>

      <section className="giveTheGift">
        <h1>Give the Gift of a Postcard</h1>
        <h5>Give the gift of a lasting memory with a postcard</h5>
        <button>PURCHASE A POSTCARD</button>
      </section>

      <section className="prefer">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
              <Grid item xs={4}>
                <div className="head securePayment">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faLock}
                      size={"1x"}
                      style={{ color: "white" }}
                    />
                  </span>
                  <div className="article">
                    <h4> SECURE PAYMENT</h4>
                    <h3>All our payments our SSL secured</h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="head delivered">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBox}
                      size={"1x"}
                      style={{ color: "white" }}
                    />
                  </span>
                  <div className="article">
                    <h4> DELIVERED WITH CARE</h4>
                    <h3>Super fast shipping to your door</h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="head excellent">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHand}
                      size={"1x"}
                      style={{ color: "white" }}
                    />
                  </span>
                  <div className="article">
                    <h4> EXCELLENT SERVICE</h4>
                    <h3>Live chat and phone support</h3>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Home;
