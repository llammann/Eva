import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Icon, { SearchOutlined } from "@ant-design/icons";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faLock,
  faBox,
  faHand,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/style/Detail.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  handleMinus,
  handlePlus,
  handleBasket,
} from "../../../Config/BasketSlice";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    review: "",
    rating: 0,
  });

  const [activeTab, setActiveTab] = useState("description");
  useEffect(() => {
    axios("http://localhost:3000/products/" + id).then((res) => {
      setProduct(res.data);
    });
  }, []);
  console.log("laman Producttti", product);
  const dispatch = useDispatch();

  return (
    <>
      <section className="details">
        <div className="container">
          <div className="imgWrapper">
            <button>
              <SearchOutlined />
            </button>
            <img
              src="	https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5.jpg"
              alt=""
            />
          </div>

          <div className="description">
            <span>Home/Posters/{product.name}</span>

            <h3>{product.category}</h3>
            <h2>{product.name}</h2>
            <h4>${product.price}</h4>
            <p>{product.description} </p>
            <div className="buttons">
              <div className="quantity">
                <button
                  className="minus"
                  onClick={() => {
                    dispatch(handleMinus(product));
                  }}
                >
                  -
                </button>
                <span>{product.count}</span>
                <button
                  className="plus"
                  onClick={() => {
                    console.log("Before dispatching Plus");
                    dispatch(handlePlus(product));
                    console.log("After dispatching Plus");
                  }}
                >
                  +
                </button>
              </div>

              <button
                className="addToChart"
                onClick={() => handleBasket(product)}
              >
                ADD TO CART
              </button>
            </div>

            <hr />

            <span className="category">
              Category: <span>{product.category}</span>
            </span>
          </div>
        </div>
      </section>
      <hr />
      <section className="descriptionReviews">
        <div className="container">
          <div className="options">
            <span
              className={`tab ${activeTab === "description" ? "active" : ""}`}
              onClick={() => setActiveTab("description")}
            >
              <a href="#">Description</a>
            </span>
            <span
              className={`tab ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              <a href="#">Reviews({product.comments?.length})</a>
            </span>
          </div>

          {activeTab === "description" && (
            <div>
              <div className="types">
                <div className="type">
                  <h3 className="header">Framed Without Borders:</h3>
                  <ul>
                    <li>Printed on High-Quality vinyl.</li>
                    <li>1-inch thick wooden back frame.</li>
                    <li>No additional hanging hardware is required.</li>
                    <li>Care: Dust with a soft, dry cloth.</li>
                  </ul>
                </div>
                <div className="type">
                  <h3 className="header">
                    Framed With Borders & Acrylic Glass
                  </h3>
                  <ul>
                    <li>Printed on High-Quality vinyl.</li>
                    <li>1-inch thick wooden back frame.</li>
                    <li>No additional hanging hardware is required.</li>
                    <li>Care: Dust with a soft, dry cloth.</li>
                  </ul>
                </div>
              </div>
              <p className="note">
                <strong> Note:</strong>{" "}
                <em>
                  There may be a slight difference in actual color, due to the
                  colors of display.
                </em>
              </p>
            </div>
          )}
          {/* //!Reviews */}
          {activeTab === "reviews" && (
            <div className="reviewsSection">
              <div className="comments">
                <ul>
                  {product.comments.map((comment) => (
                    <li>
                      <div className="imgWrapper">
                        <img
                          src="	https://secure.gravatar.com/avatar/b507128c4a8c964e410e4cf47bc89a67?s=60&d=mm&r=g"
                          alt=""
                        />
                      </div>
                      <div className="articles">
                        <em>{comment.name}</em>
                        <div className="stars">
                          <StarBorderIcon />
                          <StarBorderIcon />
                          <StarBorderIcon />
                          <StarBorderIcon />
                          <StarBorderIcon />
                        </div>
                        <p>{comment.review}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <form action="">
                <h2>Add e review</h2>
                <h4>
                  Your email address will not be published. Required fields are
                  marked *
                </h4>
                <span className="rating">Your rating *</span>
                <span>
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </span>
                <p>Your review *</p>
                <input
                  type="text"
                  value={newComment.review}
                  className="yourReview"
                  onChange={(e) => {
                    // console.log(e.target.value)
                    setNewComment({ ...newComment, review: e.target.value });
                    // console.log("salam")
                  }}
                />
                <div className="nameEmail">
                  <div className="name">
                    <h3>Name *</h3>
                    <input
                      type="text"
                      value={newComment.name}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setNewComment({ ...newComment, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="email">
                    <h3>Email *</h3>
                    <input
                      type="text"
                      value={newComment.email}
                      onChange={(e) => {
                        // console.log(e.target.value)
                        setNewComment({ ...newComment, email: e.target.value });
                      }}
                    />
                  </div>
                </div>

                <input type="checkbox" />
                <span>
                  {" "}
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>
                <br />
                <button
                  onClick={() => {
                    console.log(newComment);
                    console.log("olmadi daaaaaaaaAAAAAa");
                    axios
                      .patch(`http://localhost:3000/products/${id}`, {
                        comments: [...product.comments, newComment],
                      })
                      .then((res) => {
                        setProduct({ ...product, comments: res.data.comments });
                      });
                    setNewComment({
                      name: "",
                      email: "",
                      review: "",
                      rating: 0,
                    });
                  }}
                >
                  SUBMIT
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      <section className="relatedProducts">
        <div className="container">
          <h2>Related products</h2>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
              <Grid item xs={4}>
                <div className="card1">
                  <div className="imgWrapper">
                    <button>
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        style={{ color: "#2C541D", fontSize: "15px" }}
                      />
                    </button>
                    <img
                      src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg"
                      alt=""
                    />
                  </div>
                  <div className="article">
                    <h6 className="posters">Posters</h6>
                    <h4>Poster V1</h4>
                    <h5>$23.99</h5>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="card2">
                  <div className="imgWrapper">
                    <button>
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        style={{ color: "#2C541D", fontSize: "15px" }}
                      />
                    </button>

                    <img
                      src="	https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg"
                      alt=""
                    />
                  </div>
                  <div className="article">
                    <h6 className="posters">Posters</h6>
                    <h4>Poster V1</h4>
                    <h5>$23.99</h5>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="card3">
                  <div className="imgWrapper">
                    <button>
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        style={{ color: "#2C541D", fontSize: "15px" }}
                      />
                    </button>

                    <img
                      src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg"
                      alt=""
                    />
                  </div>
                  <div className="article">
                    <h6 className="posters">Posters</h6>
                    <h4>Poster V1</h4>
                    <h5>$23.99</h5>
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

export default Detail;
