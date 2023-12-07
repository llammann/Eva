import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../../Config/WishlistSlice";
import "./../../../assets/style/wishlist.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faLock,
  faBox,
  faHand,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import Icon, { SearchOutlined } from "@ant-design/icons";



function Wishlist() {
  // const MyWishlist = JSON.parse(localStorage.getItem("wishlist"));
  // console.log(MyWishlist);

  const MyWishlist = useSelector((state) => state.wishlist.wishlist);
console.log(MyWishlist);
  const dispatch = useDispatch();

  return (
    <>
      <div className="wishlist">
        <hr />
        <h1>Wishlist</h1>
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, md: 12 }} spacing={7}>
              {MyWishlist &&
                MyWishlist.map((wish) => (
                  <Grid item xs={4} key={wish.id}>
                    <div className="card">
                      <div className="imgWrapper">
                        <button>
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{ color: "#2C541D", fontSize: "15px" }}
                          />
                        </button>
                        <button
                          className="heart"
                          onClick={() => {
                            dispatch(removeFromWishlist({ products: wish }));
                            // dispatch(updateBasket());
                          }}
                        >
                          <HeartFilled />
                        </button>
                        <img src={wish.image} alt="" />
                      </div>
                      <div className="article">
                        <h6 className="posters">{wish.category}</h6>
                        <h4>{wish.name}</h4>
                        <h5>{wish.price}</h5>
                      </div>
                    </div>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Wishlist;
