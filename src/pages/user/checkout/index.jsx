import React from "react";
import "../../../assets/style/Checkout.scss";
function Checkout() {
  return (
    <>
      <section className="checkout">
        <hr />
        <div className="container">
          <div className="main">
            <div className="title">
              <h3>Checkout</h3>
            </div>
            <div className="coupon">
              <div className="line"></div>
              <div className="click">
                <p>Have a coupon? Click here to enter your code</p>
              </div>
            </div>
            <div className="leftRight">
              <div className="left">
                <div className="bil">
                  <h4>Billing details</h4>
                </div>
                <hr style={{ width: "670px" }} />
                <div className="names">
                  <div className="name">
                    <label htmlFor="">First Name</label> <br />
                    <input type="text" /> <br />
                  </div>

                  <div className="last">
                    <label htmlFor="">Last Name</label> <br />
                    <input type="text" /> <br />
                  </div>
                </div>
                <div className="com">
                  <label htmlFor="">Company name (optional)</label> <br />
                  <input type="text" /> <br />
                </div>
                <div className="country">
                  <label htmlFor="">Country / Region *</label> <br />
                  <input type="text" /> <br />
                </div>
                <div className="street">
                  <label htmlFor="">Street address *</label> <br />
                  <input
                    type="text"
                    placeholder="House number and street name"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Apartment,suite,unit,etc.(optional)"
                  />
                  <br />
                </div>
                <div className="town">
                  <label htmlFor="">Town / City *</label>
                  <br />
                  <input type="text" /> <br />
                </div>
                <div className="state">
                  <label htmlFor="">State / County (optional)</label>
                  <br />
                  <input type="text" />
                  <br />
                </div>
                <div className="phone">
                  <label htmlFor="">Phone *</label>
                  <br />
                  <input type="text" />
                  <br />
                </div>
                <div className="email">
                  <label htmlFor="">Email address *</label>
                  <br />
                  <input type="text" />
                  <br />
                </div>
                <div className="addition">
                  <h3>Additional information</h3>
                  <hr />
                  <div className="order">
                    <label htmlFor="">Order notes (optional)</label> <br />
                    <input
                      type="text"
                      placeholder="Notes about your order,e.g.special notes for delivery"
                    />
                  </div>
                </div>
              </div>
              <div className="rightInp">
                <div className="mains">
                  <h5>
                    <b>Your order</b>
                  </h5>
                  {/* <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>"Postcard V1X3"</td>
                        <td>$71.97</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>SubTotal</th>
                        <td>
                          <span>71.98</span>
                        </td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td>
                          <span>71</span>
                        </td>
                      </tr>
                    </tfoot>
                  </table> */}
                  <div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="sorry">
                    <div className="text">
                      <p>
                        Sorry, it seems that there are no available payment
                        methods. Please contact us if you require assistance or
                        wish to make alternate arrangements.
                      </p>
                    </div>
                  </div>
                  <button className="placeOrder">PLACE ORDER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Checkout;