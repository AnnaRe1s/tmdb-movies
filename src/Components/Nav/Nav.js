import { Link } from "react-router-dom";

// style import
import {Navbar} from "../../Styles_Global/Nav"

// import Image
import logo from "../../Assests/logo.png";

export default function Nav() {
  return (
    <Navbar>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </Navbar>
  );
}
