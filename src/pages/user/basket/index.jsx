import React from "react";
import "./../../../assets/style/Basket.scss";
// import { IconName } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  handleMinus,
  handlePlus,
  updateBasket,
  removeFromBasket,
} from "../../../Config/BasketSlice";

function Basket() {
  const dispatch = useDispatch();
  const MyBasket = useSelector((state) => state.basket.basket);
  console.log("basket: ", MyBasket);
  let subtotal = 0;
  console.log(MyBasket);
  return (
    <>
      <hr />
      <section className="firstTable">
        <div className="container">
          <h1>Cart</h1>
          <div className="cartTable">
            <table>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>

              {MyBasket &&
                MyBasket.map((x) => {
                  subtotal += x.products.price * x.count;
                  return (
                    <tr>
                      <td>
                        <div className="cancel">
                          <button
                            onClick={() => {
                              dispatch(removeFromBasket(x));
                              dispatch(updateBasket());
                            }}
                          >
                            <TiDeleteOutline className="CancelCart" />
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="imgWrapper">
                          <img src={x.products.image} alt="" />
                        </div>
                      </td>
                      <td>{x.products.name}</td>
                      <td>{x.products.price}</td>
                      <td>
                        <div className="quantity">
                          <button
                            className="minus"
                            onClick={() => {
                              dispatch(handleMinus(x));
                              dispatch(updateBasket());
                            }}
                          >
                            -
                          </button>
                          <span> {x.count}</span>
                          <button
                            className="plus"
                            onClick={() => {
                              console.log("Before dispatching Plus");
                              dispatch(handlePlus(x));
                              dispatch(updateBasket());
                              console.log("After dispatching Plus");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{(x.products.price * x.count).toFixed(2)}</td>
                    </tr>
                  );
                })}
            </table>

            <div className="buttons">
              <div className="tableInpBtn">
                <div className="Inp">
                  <input type="text" placeholder="Coupon code" />
                </div>

                <div className="Btn">
                  <button>APLY COUPON</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secondTable">
        <div className="container">
          <div className="subTotal">
            <div className="cartTotals">
              <h5>
                <b>Cart Totals</b>
              </h5>
            </div>
            <div className="body">
            <hr />
            <div className="sub">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <hr
              style={{
                width: "90%",
                margin:"auto"
              }}
            />
            <div className="total">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <hr style={{ width: "90%", margin: "auto" }} />
            <div className="btn">
            <button>PROCCED TO CHECKOUT</button>
            </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Basket;
