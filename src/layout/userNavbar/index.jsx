import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../assets/style/userNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { width } from "@mui/system";
import { TiDeleteOutline } from "react-icons/ti";

import { removeFromBasket } from "../../Config/BasketSlice";

import NavDropdown from "react-bootstrap/NavDropdown";

function UserNavbar() {
  let user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log("salam");
    sessionStorage.setItem("userlogin", JSON.stringify(false));
    // window.location.reload();

    // const user = JSON.parse(localStorage.getItem("user"));

    axios.put(`http://localhost:3000/users/${user.id}`, JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    window.localStorage.removeItem("user");
  };
  const MyBasket = useSelector((state) => state.basket.basket);

  let subtotal = 0;
  let count = 0;

  MyBasket &&
    MyBasket.map((x) => {
      subtotal += x.products.price * x.count;
      count += x.count;
    });

  const MyWishlist = useSelector((state) => state.wishlist.wishlist);

  // Calculate the quantity WishList
  const wishlistQuantity = MyWishlist ? MyWishlist.length : 0;

  return (
    <>
      <div className="bigContainer">
        <div className="userNavbar">
          <h1>
            <Link to="/">EARTH STORE</Link>
          </h1>
          <div>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li className="wish">
                <Link to="/wishlist">
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: "0 20px",
                    }}
                  >
                    <span>
                      <MdFavorite
                        style={{
                          color: "#2C541D",
                          width: "29px",
                          height: "29px",
                        }}
                      />
                    </span>

                    <sup className="up">
                      <span>{wishlistQuantity}</span>
                    </sup>
                  </button>
                </Link>
              </li>
              <li className="bag">
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "0 20px",
                  }}
                >
                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                    // style={{
                    //   backgroundColor: "red",
                    // }}
                  >
                    <div
                      class="offcanvas-header"
                      style={{
                        color: "#74a84a",
                        padding: "30px",
                      }}
                    >
                      <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        Shopping Cart
                      </h5>
                      <hr />
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div
                      class="offcanvas-body"
                      style={{
                        // backgroundColor: "yellow",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "30px",
                      }}
                    >
                      {/* NEW ADDI */}
                      <div className="recentlyViewed">
                        <div className="viewed">
                          <ul>
                            {MyBasket &&
                              MyBasket.map((item) => {
                                return (
                                  <li>
                                    <div className="left">
                                      <div className="imgWrapper">
                                        <img src={item.products.image} alt="" />
                                      </div>
                                      <div className="articles">
                                        <h3 className="name">
                                          {item.products.name}
                                        </h3>
                                        <h2 className="price">
                                          ${item.products.price}
                                        </h2>
                                      </div>
                                    </div>
                                    <div className="cancel">
                                      <button
                                        onClick={() => {
                                          dispatch(removeFromBasket(item));
                                        }}
                                      >
                                        <TiDeleteOutline className="CancelCart" />
                                      </button>
                                    </div>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      </div>
                      {/* NEW ADDI */}
                      <hr />
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          className="subTotal"
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontSize: "20px",
                          }}
                        >
                          <span
                            style={{
                              // padding-right: .5em;
                              // text-align: left;
                              // font-weight: 500;
                              fontWeight: "500",
                              fontSize: "30px",
                              color: "#74a84a",
                            }}
                          >
                            Subtotal:
                          </span>
                          <span> ${subtotal.toFixed(2)}</span>
                        </div>

                        <hr />
                        <button
                          style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: " #74a84a",
                            marginBottom: "10px",
                          }}
                        >
                          <Link
                            to="/basket"
                            style={{
                              color: "white",
                            }}
                          >
                            VIEW CHART
                          </Link>
                        </button>
                        <br />
                        <button
                          className="Checkout"
                          style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: " #74a84a",
                            color: "white",
                          }}
                        >
                          <Link to="/checkout">CHECKOUT</Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <span>
                    <FaShoppingBag
                      style={{
                        color: "#2C541D",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </span>
                  <sup className="up">
                    <span>{count}</span>
                  </sup>
                </button>
              </li>
              <li>
                {user ? (
                  <NavDropdown title={user.username} id="basic-nav-dropdown">
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
      </div>
    </>
  );
}

export default UserNavbar;
