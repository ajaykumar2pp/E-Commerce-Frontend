import React, { useEffect, useState } from "react";
import api from "../api/userApi";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:8500/products");
      const data = await response.json();

      // Assuming the array of products is directly in the data property
      setProduct(data.data.product);
      console.log("API response data:", data.data.product);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setProduct([]);
    }
  };

  const deleteProduct = (id) => {
    api.delete(`/products/${id}`).then((response) => {
      console.log("Delete Product", response.data);
      getProduct();
    });
  };

  // const searchHandle = (e) => {
  //   console.log(e.target.value);
  //   let key = e.target.value;
  //   if (key) {
  //     fetch(`http://localhost:8500/search/${key}`)
  //       .then((result) => result.json())
  //       .then((data) => {
  //         if (data && data.data && data.data.product) {
  //           setProduct(data.data.product);
  //           console.log("get single response data:", data.data.product);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error searching for product:", error);
  //       });
  //   } else {
  //     getProduct();
  //   }
  // };
  


  const searchHandle = async (e) => {
    console.log(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8500/search/${key}`);
      let data = await result.json();
   
      if (data) {
        setProduct(data);
        console.log("search data:", data);
      }
    } else {
      getProduct();
    }
  };

  // const updateProduct = () => {};
  // const getProduct = () => {
  //   api.get("/products").then((response) => {
  //     console.log(response.data.product);

  //     if (Array.isArray(response.data.product)) {
  //       setProduct(response.data.product);
  //     } else {
  //       setProduct([]);
  //     }
  //   });
  // };

  // const getProduct = async () => {
  //   try {
  //     const response = await api.get("/products");
  //     // console.log(response.data);
  //     //     // Assuming the array of products is directly in the data property
  //     setProduct(response.data.product);
  //     console.log("API response data:", response.data.product);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setProduct([]);
  //   }
  // };
  return (
    <>
     
      <h5 className="text-center mt-3">Product Page </h5>
      <div className="container-fluid">
        {/*   Search Product  */}
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              onChange={searchHandle}
              id="inputSearch"
              placeholder="🔍 Search Your Product"
              autoFocus
            />
          </div>
        </div>
        {/* ******  Product List *********** */}
        <div className="row justify-content-center mt-3">
          <div className="col-md-10">
            <table className="table table-bordered border-danger mt-2">
              <thead className="text-center fs-6">
                <tr>
                  <th scope="col">Sr.No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Company</th>
                  <th scope="col">Operation</th>
                  <th scope="col">Update Product</th>
                </tr>
              </thead>
              <tbody className="text-center fs-6">
                {product.length > 0 ? (
                  product.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.company}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteProduct(item._id)}
                          >
                            Delete Product
                          </button>
                        </td>
                        <td>
                          <Link
                            className="btn btn-danger"
                            to={"/update-product/" + item._id}
                          >
                            update
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4">No Products available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

   
    </>
  );
};

export default Product;
