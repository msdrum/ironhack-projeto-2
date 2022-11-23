import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="navBar">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand as="div">
            <img
              alt="logo da ironhack em branco"
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
               Home
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;