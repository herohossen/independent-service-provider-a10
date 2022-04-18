import "../../Styles/NotFound.css";
import NotFoundImg from "../../images/404-error-page-not-found.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return     <div>
  <div className="notfound-img">
    <img src={NotFoundImg} alt="" />
    <button class="btn-home custom-btn" onClick={() => navigate("/home")}>GO TO HOMEPAGE</button>
  </div>
</div>
};

export default NotFound;
