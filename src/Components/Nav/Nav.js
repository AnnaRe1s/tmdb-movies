import { Link } from "react-router-dom";

import "./Nav.css";

import logo from "../../Assests/logo.png";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </nav>
  );
}
