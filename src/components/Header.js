import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  function btnClickHandler() {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  }
  return (
    <div className="header">
      <img
        className="logo-img"
        width="90"
        height="90"
        src={LOGO_IMG}
        alt="food-bar"
      />
      <div className="company-name">Namaste Food</div>
      <ul className="header-ul">
        <li className="header-li">
          <Link to="/">Home</Link>
        </li>
        <li className="header-li">
          <Link to="/About">About Us</Link>
        </li>
        <li className="header-li">
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li className="header-li">Cart</li>
        <button className="login" onClick={btnClickHandler}>
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
