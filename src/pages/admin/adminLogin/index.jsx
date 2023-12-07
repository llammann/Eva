import { Container } from "react-bootstrap";
import "../../../assets/style/Login.scss";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Please enter a username"),
  password: Yup.string()
    .required("Please enter the correct password!")
    .matches(
      /^(?=.*[a-z])(?=.*\d).{8,}$/,
      "Please enter the correct password!"
    ),
});

function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Ancaq admin olan userlerin isadmin deyerlerini db.jsondan getirir
    axios.get("http://localhost:3000/users?fields=id,isAdmin").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="login">
      <title>Login Page</title>

      <div className="login-section">
        <Container>
          <div className="login-form">
            <h2>Login</h2>

            <div>
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  // Yalniz isAdmin=true olanlari tapir
                  const foundUser = users.find(
                    (element) =>
                      element.isAdmin &&
                      element.username === values.username &&
                      element.password === values.password
                  );

                  if (foundUser) {
                    localStorage.setItem("user", JSON.stringify(foundUser));
                    sessionStorage.setItem("userlogin", JSON.stringify(true));
                    navigate("dashboard");
                    window.location.reload();
                  } else {
                    setError("Invalid username or password");
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="input">
                      <label>Username *</label>
                      <div className="input-username">
                        <Field
                          className="username"
                          name="username"
                          style={
                            errors.username &&
                            touched.username && { borderColor: "red" }
                          }
                        />
                      </div>
                    </div>
                    {errors.username && touched.username && (
                      <div
                        style={
                          errors.username &&
                          touched.username && {
                            fontSize: "17px",
                            color: "red",
                            marginTop: "-20px",
                          }
                        }
                      >
                        {errors.username}
                      </div>
                    )}

                    <div className="input">
                      <label>Password *</label>
                      <div
                        className="inputpassword"
                        style={
                          errors.password &&
                          touched.password && { borderColor: "red" }
                        }
                      >
                        <Field className="password" name="password" />
                      </div>
                    </div>
                    {errors.password && touched.password && (
                      <div
                        style={
                          errors.password &&
                          touched.password && {
                            fontSize: "17px",
                            color: "red",
                            marginTop: "-20px",
                          }
                        }
                      >
                        {errors.password}
                      </div>
                    )}
                    {error && (
                      <div style={{ color: "red", marginTop: "-20px" }}>
                        {error}
                      </div>
                    )}
                    <button type="submit">Sign In</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AdminLogin;
