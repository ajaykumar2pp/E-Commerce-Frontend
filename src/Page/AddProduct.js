import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css"

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [company, setCompany] = useState("");
  const [image, setImage] = useState(null)
  const [error, setError] = useState(false)
  const navigate = useNavigate();


  const handleSave = async (e) => {
    console.log(name, price, quantity, company, image);
    e.preventDefault();
    if (!name || !price || !quantity || !company || !image) {
      setError(true)
      return false;
    }
    try {
      const userId = JSON.parse(localStorage.getItem("user")).data.user._id;
      console.log(userId);

      // Use FormData to send multipart/form-data
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("company", company);
      formData.append("userId", userId);
      formData.append("image", image);

      let response = await axios.post("http://localhost:8500/products/add-product",
      formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
        // {
        //   name: name,
        //   price: price,
        //   quantity: quantity,
        //   company: company,
        //   userId: userId,
        //   image: image
        // },
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // }
      // );

      console.log(response.data);
      alert("Product Add");

      navigate("/product");
    } catch (error) {
      console.error("Error during API call:", error);
    }
    // Reset the form inputs
    setName("");
    setPrice("");
    setQuantity("");
    setCompany("");
    setImage(null);
  };

  return (
    <>


      <h5 className="text-center mt-4 text-body-tertiary">Add Product </h5>
      <div className="container">
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
                {error && !name && <div className="valid text-danger">Plz valid name</div>}
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
                {error && !price && <div className="valid text-danger">Plz valid price</div>}
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
                {error && !quantity && <div className="valid text-danger">Plz valid quantity</div>}
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
                {error && !company && <div className="valid text-danger">Plz valid company</div>}
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

                  onChange={(e) => setImage(e.target.files[0])}
                />
                {error && !image && <div className="valid text-danger">Plz upload image</div>}
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-5"
                onClick={handleSave}
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>


    </>
  );
};

export default AddProduct;

// const collectData= async()=>{
//   console.log(name,email,password);
//   let result =await fetch("http://localhost:8500/register",{
//     method:'post',
//     body:JSON.stringify({name,email,password}),
//     headers:{
//       'Content-Type':'application/json'
//     }
//   });
//   result =await result.json();
//   console.log(result)
//   localStorage.setItem("user",JSON.stringify(result));

// }

// axios.post("http://localhost:8500/register", {
//         username:name,
//         email:email,
//         password:password

//       })
//       .then((userData) => {
//         let data = userData.data;
//         console.log(data)
//         alert("Add User");
//         localStorage.setItem("user",JSON.stringify(data))
//         navigate("/");
//       });
//       setName(" ");
//       setEmail(" ");
//       setPassword(" ");
