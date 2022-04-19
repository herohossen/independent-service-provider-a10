import React from "react";
import "../../Styles/About.css";
import myimg from '../../images/DelowarHossen.jpg'
const About = () => {
  return (
    <div>
      <div className="aboutpage">
        <div>
          <h1>I am Delowar Hossen</h1>

          <p>
            I want to be react programmer. From today my only determination is
            to achive my goal. So i will try harder and harder to improve
            myself.
          </p>
          <p></p>
        </div>
        <div className="myImage">
          <img src={myimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
