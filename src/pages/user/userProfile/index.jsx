import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
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
  const [initialUserData, setInitialUserData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setEditedUserData(user || {});
    setInitialUserData(user || {});
  }, []); // Component ilk yuklenen anda ise dusur

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    axios
      .put(`http://localhost:3000/users/${initialUserData.id}`, editedUserData)
      .then((response) => {
        console.log("Değişiklikler başarıyla kaydedildi.");
        setInitialUserData({ ...editedUserData });
        localStorage.setItem(
          "user",
          JSON.stringify({ ...editedUserData, id: initialUserData.id })
        );
      })
      .catch((error) => {
        console.error("Değişiklikleri kaydetme hatası:", error);
      });

    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setEditedUserData({ ...initialUserData });
  };

  return (
    <section
      style={{
        backgroundColor: "#BAEB9D",
        padding: "150px",
        paddingLeft: "950px",
        width: "100%",
      }}
    >
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://i.etsystatic.com/28727146/r/il/730b67/2978574632/il_570xN.2978574632_9rhf.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />

                <p className="text-muted mb-1">
                  {!editMode ? (
                    initialUserData.username
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
                    initialUserData.name
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
                    initialUserData.surname
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
                    initialUserData.password
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
                    initialUserData.email
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
                    initialUserData.balance
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
