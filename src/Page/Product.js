import React, { useEffect, useState } from "react";
import api from "../api/userApi";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = (id) => {
    api.delete(`/products/${id}`).then((response) => {
      console.log("Delete Product", response.data);
      getProduct();
    });
  };



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


  return (
    <>

      <div className="container-fluid">
        {
          loading ? (
            <h5 className='text-center text-bg-secondary py-3'>Loading Product Page...</h5>
          ) : (
            <div>
              {/*   Search Product  */}
              <div className="row justify-content-center mt-3 mb-3">
                <div className="col-sm-8">
                  <div>
                    <h5 className="text-center mt-3">Product Page </h5>
                  </div>

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
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Company</th>
                        <th scope="col">Operation</th>
                        <th scope="col">Update Product</th>
                      </tr>
                    </thead>
                    <tbody className="text-center fs-6">
                      {Array.isArray(product) && product.length > 0 ? (
                        product.map((item, index) => {
                          return (
                            <tr key={item._id}>
                              <td>{index + 1}</td>
                              <td>
                                <img src={item.image} alt={item.name} width="100" height="100" />
                              </td>
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
          )
        }

      </div>


    </>
  );
};

export default Product;
