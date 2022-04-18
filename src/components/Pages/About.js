import React from "react";
import "../../Styles/About.css";
import myimg from '../../images/DelowarHossen.jpg'
const About = () => {
  return (
    <div>
      About page
      <div className="aboutpage">
        <div>
          <p>I am Delowar Hossen</p>
          <p>
            I want to be react programmer. So i am trying to myself skillfull in
            react.
          </p>
          <p></p>
        </div>
        <div className="myImage">
          <img src={myimg} alt=""/>
        </div>
      </div>

    </div>
  );
};

export default About;
