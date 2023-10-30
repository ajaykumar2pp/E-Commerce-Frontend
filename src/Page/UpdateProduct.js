import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./UpdateProduct.css";




const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [company, setCompany] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();
  const params = useParams()

  useEffect(() => {
    console.log(params)
    getProductDetails();
  }, [])

  const getProductDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8500/products/${params._id}`);
      const data = await response.json();
      console.log("Single Product data:", data);
      setName(data.name)
      setPrice(data.price)
      setQuantity(data.quantity)
      setCompany(data.company)
    } catch (error) {
      console.error("Error fetching product data:", error);

    }
  };

  const updateProduct = async (e) => {
    console.log(name, price, quantity, company);
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("company", company);
      formData.append("image", image);

      let response = await axios.put(
        `http://localhost:8500/products/${params._id}`,
        formData
        // {
        //   name: name,
        //   price: price,
        //   quantity: quantity,
        //   company: company,

        // }
      );

      console.log(response.data);
      alert("Product Update");
      navigate("/product");
    } catch (error) {
      console.error("Error during API call:", error);
    }
    // Reset the form inputs
    setName(" ");
    setPrice(" ");
    setQuantity(" ");
    setCompany(" ");
    setImage(null);
  };

  return (
    <>

      <h5 className="text-center mt-3">Update Product </h5>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 ">
            {/* form   */}
            <form className="mb-5 border border-primary p-4 m-3 rounded">
              {/* name  */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Product
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter Product Name"
                  aria-describedby="nameUser"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

              </div>
              {/* Price */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="Enter Product Price"
                  aria-describedby="ProductUser"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

              </div>
              {/* Quanity */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  placeholder="Enter Quantity"
                  aria-describedby="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />

              </div>
              {/* company*/}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  company
                </label>
                <input
                  type="company"
                  className="form-control"
                  id="company"
                  name="company"
                  placeholder="Enter Product Company"
                  aria-describedby="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />

              </div>
              {/* Image uplaod */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Image Upload
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  aria-describedby="image"
                  onChange={
                    (e) => 
                    {
                      setImage(e.target.files[0]);
                      const url = URL.createObjectURL(e.target.files[0]);
                      setPreviewImage(url);
                    }
                  }
                />

              </div>
              {previewImage && (
                <img src={previewImage} alt="Product Preview" className="preview-image" />
              )}
              <button
                type="submit"
                className="btn btn-success mb-5"
                onClick={updateProduct}
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default UpdateProduct;
