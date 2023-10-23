import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


const NavProfile = () => {
  return (
    <>
   
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Link to="/" className="text-decoration-none text-danger fw-bold">
          E-Com
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
          
              <>
              
                <Link
                  to="/"
                  className=" py-2 ps-3 pe-4 text-white fw-semibold text-decoration-none"
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
                
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Logout
                </Link>
                <Link
                  to="/"
                  className="py-2  rounded text-sm-light ps-3 pe-4 text-secondary table-light fw-semibold text-decoration-none"
                >
                 Ajay Kumar
                </Link>
              </> 
        
              

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  </>
  )
}

export default NavProfile