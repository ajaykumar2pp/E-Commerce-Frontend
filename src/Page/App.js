import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:8500/products");
      const data = await response.json();

      // Assuming the array of products is directly in the data property
      // setProducts(data.data.product);
      // console.log("API response data:", data.data.product);
      if (response.ok) {
        setProducts(data.data.product);
      } else {
        setError("Error fetching product data");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
      setError("Error fetching product data");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <h5 className='text-center text-bg-secondary py-3'>Loading Product Page...</h5>}
      {error && <h5 className='text-center text-bg-secondary py-3'>{error}</h5>}
      <section >
        <div className="container-fluid px-4 px-lg-5 mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="App mb-5">
                <h3>E- Com Product Available</h3>
              </div>
            </div>
          </div>
          <div className="row  gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => (
              <div className="col mb-5" key={product.id}>
                <div className="card h-100">
                  {/* Product image */}
                  <img className="card-img-top p-2" src={product.image} alt="oops" />
                  {/* Product details */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name */}
                      <h5 className="fw-bolder">{product.name}</h5>
                      {/* Product price */}
                      ${product.price}
                    </div>
                  </div>
                  {/* Product actions */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link to={`/product/${product._id}`} className="btn btn-outline-dark mt-auto">
                        View options
                      </Link>
                    </div>
                  </div>
                </div>
              </div> 
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App