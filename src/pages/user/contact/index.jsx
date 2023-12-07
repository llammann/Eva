import React from "react";
import "../../../assets/style/Contact.scss";
import phone from "../../../assets/images/phone.png";
import email from "../../../assets/images/email.png";
import location from "../../../assets/images/location.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Contact() {
  return (
    <>
      <section className="contactUs">
        <h1> CONTACT US</h1>
      </section>

      <section className="contact">
        <div className="container">
          <div className="left">
            <h1>Get In Touch</h1>
            <form action="">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Message" className="message" />
              <button>SEND NOW</button>
            </form>
          </div>

          <div className="right">
            <h1>Talk To Us</h1>

            <ul className="connections">
              <li>
                <span className="icon">
                  <img src={email} alt="" />
                </span>
                <div>
                  <span>EMAIL</span>
                  <p>something@tyler.com</p>
                </div>
              </li>

              <li>
                <span className="icon">
                  <img src={phone} alt="" />
                </span>
                <div>
                  <span>PHONE NUMBER</span>
                  <p className="Phone">202-555-0188</p>
                </div>
              </li>

              <li>
                <span className="icon">
                  <img src={location} alt="" />
                </span>
                <div>
                  <span>ADDRESS</span>
                  <p className="Place">2727 Ocean Road,Malibu,CA,90264</p>
                </div>
              </li>
            </ul>

            <div className="followUs">
              <p>Follow Us:</p>
              <div className="follow">
                <span>
                  <FacebookOutlinedIcon style={{ color: "white" }} />
                </span>
                <span>
                  <TwitterIcon style={{ color: "white" }} />
                </span>
                <span>
                  <LinkedInIcon style={{ color: "white" }} />
                </span>
                <span>
                  <PlayArrowIcon style={{ color: "white" }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Contact;
