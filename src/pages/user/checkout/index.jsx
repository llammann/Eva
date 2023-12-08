import React from "react";
import "../../../assets/style/Checkout.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { handleCheckout } from "../../../Config/BasketSlice";

const OrderSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  campanyName: Yup.string().required(),
  counrtyRegion: Yup.string().required(),
  streetAddresHouse: Yup.string().required(),
  streetAddresApart: Yup.string().required(),
  townCity: Yup.string().required(),
  stateCountry: Yup.string().required(),
  phone: Yup.string().required(),
  email: Yup.string().required(),
  orderNotes: Yup.string().required(),
});
function Checkout() {
  const Baskett = useSelector((state) => state.basket.basket);
  let subTotal = 0;

  Baskett.map((x) => {
    subTotal += x.count * x.products.price;
  });
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const handleOrder = () => {
    dispatch(handleCheckout());
  };
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

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                campanyName: "",
                counrtyRegion: "",
                streetAddresHouse: "",
                streetAddresApart: "",
                townCity: "",
                stateCountry: "",
                phone: "",
                email: "",
                orderNotes: "",
              }}
              validationSchema={OrderSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);

                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="leftRight">
                    <div className="left">
                      <div className="bil">
                        <h4>Billing details</h4>
                      </div>
                      <hr style={{ width: "670px" }} />
                      <div className="tables">
                        <div className="names">
                          <div className="name">
                            <label htmlFor="">First Name</label> <br />
                            <Field
                              type="text"
                              name="firstName"
                              style={
                                errors.firstName &&
                                touched.firstName && { borderColor: "red" }
                              }
                            />{" "}
                            <br />
                          </div>

                          <div className="last">
                            <label htmlFor="">Last Name</label> <br />
                            <Field
                              type="text"
                              name="lastName"
                              style={
                                errors.lastName &&
                                touched.lastName && { borderColor: "red" }
                              }
                            />{" "}
                            <br />
                          </div>
                        </div>
                        <div className="com">
                          <label htmlFor="">Company name (optional)</label>{" "}
                          <br />
                          <Field
                            type="text"
                            name="campanyName"
                            style={
                              errors.campanyName &&
                              touched.campanyName && { borderColor: "red" }
                            }
                          />{" "}
                          <br />
                        </div>
                        <div className="country">
                          <label htmlFor="">Country / Region *</label> <br />
                          <Field
                            type="text"
                            name="counrtyRegion"
                            style={
                              errors.counrtyRegion &&
                              touched.counrtyRegion && { borderColor: "red" }
                            }
                          />{" "}
                          <br />
                        </div>
                        <div className="street">
                          <label htmlFor="">Street address *</label> <br />
                          <Field
                            name="streetAddresHouse"
                            type="text"
                            placeholder="House number and street name"
                            style={
                              errors.streetAddresHouse &&
                              touched.streetAddresHouse && {
                                borderColor: "red",
                              }
                            }
                          />
                          <br />
                          <Field
                            type="text"
                            name="streetAddresApart"
                            placeholder="Apartment,suite,unit,etc.(optional)"
                            style={
                              errors.streetAddresApart &&
                              touched.streetAddresApart && {
                                borderColor: "red",
                              }
                            }
                          />
                          <br />
                        </div>
                        <div className="town">
                          <label htmlFor="">Town / City *</label>
                          <br />
                          <Field
                            type="text"
                            name="townCity"
                            style={
                              errors.stateCountry &&
                              touched.stateCountry && { borderColor: "red" }
                            }
                          />{" "}
                          <br />
                        </div>
                        <div className="state">
                          <label htmlFor="">State / County (optional)</label>
                          <br />
                          <Field
                            type="text"
                            name="stateCountry"
                            style={
                              errors.phone &&
                              touched.phone && { borderColor: "red" }
                            }
                          />
                          <br />
                        </div>
                        <div className="phone">
                          <label htmlFor="">Phone *</label>
                          <br />
                          <Field
                            type="text"
                            name="phone"
                            style={
                              errors.phone &&
                              touched.phone && { borderColor: "red" }
                            }
                          />
                          <br />
                        </div>
                        <div className="email">
                          <label htmlFor="">Email address *</label>
                          <br />
                          <Field
                            type="text"
                            name="email"
                            style={
                              errors.email &&
                              touched.email && { borderColor: "red" }
                            }
                          />
                          <br />
                        </div>
                        <div className="addition">
                          <h3>Additional information</h3>
                          <hr />
                          <div className="order">
                            <label htmlFor="">Order notes (optional)</label>{" "}
                            <br />
                            <Field
                              type="text"
                              placeholder="Notes about your order,e.g.special notes for delivery"
                              name="orderNotes"
                              style={
                                errors.orderNotes &&
                                touched.orderNotes && { borderColor: "red" }
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rightInp">
                      <div className="mains">
                        <h5>
                          <p>Your order</p>
                        </h5>
                        <div className="table">
                          <table>
                            <thead>
                              <tr style={{ height: "50px" }}>
                                <th>Product</th>
                                <th>Subtotal</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{ height: "50px" }}>
                                <td>SubTotal</td>
                                <td>
                                  <span>{subTotal}</span>
                                </td>
                              </tr>
                              <tr style={{ height: "50px" }}>
                                <td>Total</td>
                                <td>
                                  <span>{subTotal}</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="sorry">
                          <div className="text">
                            <p>
                              Sorry, it seems that there are no available
                              payment methods. Please contact us if you require
                              assistance or wish to make alternate arrangements.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={handleOrder}
                          type="submit"
                          className="placeOrder"
                        >
                          PLACE ORDER
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Checkout;
