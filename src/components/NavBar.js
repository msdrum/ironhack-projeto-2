import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="navBar">
        <Link to="/" style={{ textDecoration: "none" }}>
            <img
              alt="logo da ironhack em branco"
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
              width="30"
              height="30"
            />{" "}
            <span className="wallet">wallet</span>
        </Link>
    </Navbar>
  );
}

export default NavBar;
