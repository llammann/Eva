import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setEditedUserData(user || {});
  }, []); //! Component ilk yuklenen anda ise dusur

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    localStorage.setItem("user", JSON.stringify(editedUserData));
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    const user = JSON.parse(localStorage.getItem("user"));
    setEditedUserData(user || {});
  };

  return (
    <section
      style={{
        backgroundColor: "#BAEB9D",
        padding: "150px",
        paddingLeft: "950px",
      }}
    >
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhur65zteqNln0VtF8gvGHyvrGV0MeuYGfo2b_0Us6thlH3Uthl9QZJa3Segk7SXO&usqp=CAU"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />

                <p className="text-muted mb-1">
                  {!editMode ? (
                    editedUserData.username
                  ) : (
                    <input
                      type="text"
                      value={editedUserData.username || ""}
                      onChange={(e) =>
                        setEditedUserData({
                          ...editedUserData,
                          username: e.target.value,
                        })
                      }
                    />
                  )}
                </p>
                <p className="text-muted mb-4">
                  {!editMode ? (
                    editedUserData.name
                  ) : (
                    <input
                      type="text"
                      value={editedUserData.name || ""}
                      onChange={(e) =>
                        setEditedUserData({
                          ...editedUserData,
                          name: e.target.value,
                        })
                      }
                    />
                  )}
                </p>
                <p className="text-muted mb-4">
                  {!editMode ? (
                    editedUserData.surname
                  ) : (
                    <input
                      type="text"
                      value={editedUserData.surname || ""}
                      onChange={(e) =>
                        setEditedUserData({
                          ...editedUserData,
                          surname: e.target.value,
                        })
                      }
                    />
                  )}
                </p>
                <p className="text-muted mb-4">
                  {!editMode ? (
                    editedUserData.password
                  ) : (
                    <input
                      type="text"
                      value={editedUserData.password || ""}
                      onChange={(e) =>
                        setEditedUserData({
                          ...editedUserData,
                          password: e.target.value,
                        })
                      }
                    />
                  )}
                </p>
                <p className="text-muted mb-4">
                  {!editMode ? (
                    editedUserData.email
                  ) : (
                    <input
                      type="text"
                      value={editedUserData.email || ""}
                      onChange={(e) =>
                        setEditedUserData({
                          ...editedUserData,
                          email: e.target.value,
                        })
                      }
                    />
                  )}
                </p>
                <p className="text-muted mb-4">
                  {!editMode ? (
                    editedUserData.balance
                  ) : (
                    <input
                      type="text"
                      value={editedUserData.balance || ""}
                      onChange={(e) =>
                        setEditedUserData({
                          ...editedUserData,
                          balance: e.target.value,
                        })
                      }
                    />
                  )}
                </p>
                <div className="d-flex justify-content-center mb-2">
                  {!editMode ? (
                    <Button variant="warning" onClick={handleEditClick}>
                      Edit Profile
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="primary"
                        style={{
                          backgroundColor: "green",
                          border: "none",
                          marginRight: "8px",
                        }}
                        onClick={handleSaveClick}
                      >
                        Save
                      </Button>{" "}
                      <Button
                        variant="outline-success"
                        onClick={handleCancelClick}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}