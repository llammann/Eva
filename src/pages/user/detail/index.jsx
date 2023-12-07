import React from "react";
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

function Detail() {
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
            <span>Home/Posters/Poster V3</span>

            <h3>Posters</h3>
            <h2>Poster V3</h2>
            <h4>$14.99</h4>
            <p>
              Inspirational posters are a great way to be inspired and
              encouraged to take on new challenges and adventures. Hang up a
              poster at home or in the office to be reminded how much beauty
              awaits in the world, luring you out of your comfort zone and into
              a world where possibility resides.
            </p>
            <div className="buttons">
              <div className="quantity">
                <button className="minus">-</button>
                <span>1</span>
                <button className="plus">+</button>
              </div>

              <button className="addToChart">ADD TO CART</button>
            </div>

            <hr />

            <span className="category">
              Category: <span>Posters</span>
            </span>
          </div>
        </div>
      </section>
      <hr />
      <section className="descriptionReviews">
        <div className="container">
          <div className="options">
            <span className="description">
              <a href="#">Description</a>
            </span>
            <span className="reviews">
              <a href="#">Reviews(0)</a>
            </span>
          </div>

          {/* //!Description */}
          {/* <div className="types">
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
              <h3 className="header">Framed With Borders & Acrylic Glass</h3>
              <ul>
                <li>Printed on High-Quality vinyl.</li>
                <li>1-inch thick wooden back frame.</li>
                <li>No additional hanging hardware is required.</li>
                <li>Care: Dust with a soft, dry cloth.</li>
              </ul>
            </div>
          </div>
          <p className="note">
           <strong> Note:</strong> <em>There may be a slight difference in actual color, due to the
            colors of display.</em>
          </p> */}
          {/* //!Reviews */}
          <div className="reviewsSection">
            <div className="comments">
              <ul>
                <li>
                  <div className="imgWrapper">
                    <img
                      src="	https://secure.gravatar.com/avatar/b507128c4a8c964e410e4cf47bc89a67?s=60&d=mm&r=g"
                      alt=""
                    />
                  </div>
                  <div className="articles">
                    <em>Your review is awating approval</em>
                    <div className="stars">
                      <StarBorderIcon />
                      <StarBorderIcon />
                      <StarBorderIcon />
                      <StarBorderIcon />
                      <StarBorderIcon />
                    </div>
                    <p>Your comment</p>
                  </div>
                </li>
                <li>
                  <div className="imgWrapper">
                    <img
                      src="	https://secure.gravatar.com/avatar/b507128c4a8c964e410e4cf47bc89a67?s=60&d=mm&r=g"
                      alt=""
                    />
                  </div>
                  <div className="articles">
                    <em>Your review is awating approval</em>
                    <div className="stars">
                      <StarBorderIcon />
                      <StarBorderIcon />
                      <StarBorderIcon />
                      <StarBorderIcon />
                      <StarBorderIcon />
                    </div>
                    <p>Your comment</p>
                  </div>
                </li>
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
              <input type="text" className="yourReview"/>
              <div className="nameEmail">
                <div className="name">
                  <h3>Name *</h3>
                  <input type="text" />
                </div>
                <div className="email">
                  <h3>Email *</h3>
                  <input type="text" />
                </div>
              </div>

              <input type="checkbox" />
              <span>
                {" "}
                Save my name, email, and website in this browser for the next
                time I comment.
              </span>
              <br />
              <button>SUBMIT</button>
            </form>
          </div>
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
