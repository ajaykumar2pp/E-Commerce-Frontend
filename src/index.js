import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import '../node_modules/react-bootstrap/dist/react-bootstrap'
import App from "./Page/App";
import PageNotFound from "./Page/PageNotFound";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingnUp from "./Page/SingnUp";
import PrivateComp from "./components/PrivateComp";
import Logout from "./Page/Logout";
import Profile from "./Page/Profile";
import Login from "./Page/Login";
import Product from "./Page/Product";
import AddProduct from "./Page/AddProduct";
import UpdateProduct from "./Page/UpdateProduct";
import NavbarComp from "./components/NavbarComp";
import { ToastContainer } from 'react-toastify';
import ProductDetail from "./Page/ProductDetail";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavbarComp />
    <ToastContainer/>
    <Routes>

      <Route element={<PrivateComp />}>
        <Route path="/" element={<App />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update-product/:_id" element={<UpdateProduct />} />
      </Route>

      <Route path="/register" element={<SingnUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    {/* <FooterComp /> */}
  </BrowserRouter>
);

reportWebVitals();
