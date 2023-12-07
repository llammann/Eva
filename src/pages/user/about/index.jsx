import React from "react";
import "../../../assets/style/About.scss";
import UserFooter from "../../../layout/userFooter";

function About() {
  return (
    <>
      <section className="aboutImg">
        <div>
          <h1>WHO ARE WE?</h1>
        </div>
      </section>
      <section className="ourMission">
        <div className="container">
          <div className="mission1">
            <div className="mountainImage3">
              <img
                src="https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Our-Mission-min-768x572.jpg"
                alt=""
              />
            </div>
            <div className="mission2">
              <h1>OUR MISSION</h1>
              <p>
                Hello, my name is Tyler Moore and with the help of many people I
                made this template. I made it so it is super easy to update and
                so that it flows perfectly with my tutorials. Lots of love and
                hundreds of hours went into making it. I hope you love it as
                much as I do.
              </p>
              <br />
              <p className="wish">
                I wish you the best of luck with your business, enjoy the
                adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="theGift">
        <h1>
          <b>Give the Gift of a Postcard</b>
        </h1>
        <h5>Give the gift of a lasting memory with a postcard</h5>
        <button>PURCHASE A POSTCARD</button>
      </section>
    </>
  );
}

export default About;
