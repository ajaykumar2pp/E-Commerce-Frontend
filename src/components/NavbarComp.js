import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NavbarComp = () => {
  // const auth = localStorage.getItem("user");


  const auth = JSON.parse(localStorage.getItem("user"));

  if (auth && auth.data && auth.data.user) {
    const username = auth.data.user.username;
    const email = auth.data.user.email;

    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
  } else {
    // console.log("User data not found in localStorage");
  }

  // console.log(auth)
  const navigate = useNavigate();
  const logout = () => {
    console.log("user logout");
    toast.success('User Logout Successfully!');
    localStorage.clear();
    navigate("/register");
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
                {/* <Link
                  to="/update-product/:_id"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Update Product
                </Link> */}
                {/* <Link
                  to="/profile"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Profile
                </Link> */}
                <NavDropdown title="Profile" className=" ps-3 fw-semibold pe-4 " id="basic-nav-dropdown">
                  <NavDropdown.Item href="/"  className="py-2 ps-3 pe-4 text-secondary   fw-semibold text-decoration-none">Name :  {auth.data.user.username}</NavDropdown.Item>
                 
                  <NavDropdown.Item href="/"  className="py-2 ps-3 pe-4 text-secondary   fw-semibold text-decoration-none">Email : {auth.data.user.email}</NavDropdown.Item>
                 
                </NavDropdown>
                <Link
                  to="/register"

                  onClick={logout}
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Logout
                </Link>
                {/* <Link
                  to="/"
                  className="py-2 ps-3 pe-4 text-secondary   fw-semibold text-decoration-none"
                >
                  {JSON.parse(auth).username}
                  {auth.data.user.username}

                </Link>
                <Link
                  to="/"
                  className="py-2 ps-3 pe-4 text-secondary   fw-semibold text-decoration-none"
                >
                  {JSON.parse(auth).username}

                  {auth.data.user.email}
                </Link> */}
                
                {" "}
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Register
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
