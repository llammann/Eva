import React from "react";
import "../../assets/style/UserFooter.scss";
import { Link } from "react-router-dom";

function UserFooter() {
  return (
    <section className="footer">
      <div className="bigcontainer">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="shop" style={{ textDecoration: "none", color: "black" }}>
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <h1>EARTH STORE</h1>
        <h5>Copyright © 2023 Planet Earth Store</h5>
      </div>
    </section>
  );
}

export default UserFooter;
