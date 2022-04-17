import "../../Styles/Home.css";


import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate= useNavigate();
  return (
    <div>
      <div>Section 1</div>
      <div>
        Section 2<button onClick={()=>navigate('/checkout')}>CheckOut</button>
      </div>
      <div>Section 3</div>
      <div>section 4</div>
      <div></div>
    </div>
  );
};

export default Home;
