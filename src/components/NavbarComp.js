import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const NavbarComp = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    console.log("user logout");
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Link to="/" className="text-decoration-none text-danger fw-bold">
          E-Com
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {auth ? (
              <>
                {" "}
                <Link
                  to="/"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Home
                </Link>
                <Link
                  to="/product"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Product
                </Link>
                <Link
                  to="/add-product"
                  className="py-2 ps-3 fw-semibold pe-4 text-decoration-none"
                >
                  Add Product
                </Link>
                <Link
                  to="/update-product/:_id"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Update Product
                </Link>
                <Link
                  to="/profile"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Profile
                </Link>
                <Link
                  to="/signup"
                  onClick={logout}
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Logout
                </Link>
                <Link
                  to="/"
                  className="py-2 ps-3 pe-4 text-secondary   fw-semibold text-decoration-none"
                >
                 { JSON.parse(auth).username} 
                </Link>{" "}
              </> 
            ) : (
              <>
                <Link
                  to="/signup"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Login
                </Link>
              </>
            )}

            {/* {auth?<Link
              to="/signup" onClick={logout}
              className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
            >
              Logout
            </Link>:<Link
              to="/signup"
              className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
            >
              Sign Up
            </Link>} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
