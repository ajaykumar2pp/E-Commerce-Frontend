import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apple from '../Image/apple-watch.png'

const ProductDetail = () => {
  const { id } = useParams();
  // console.log(id)
  

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    getProduct(id);
  }, [id]);

  const getProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8500/products/${productId}`);
      const data = await response.json();
      // console.log(data)

      if (response.ok) {
        setProduct(data);
      } else {
        setError("Error fetching product data");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
      setError("Error fetching product data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h5 className='text-center text-bg-secondary py-3'>Loading Product Page...</h5>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleAddToCart = () => {

    console.log("Adding to cart:", product);
  };
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0 p-2" src={product.image} alt="oops" />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">{product.company}</div>
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through me-3">Rs. 4500</span>
                <span>Rs. {product.price}</span>
              </div>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
              <div className="d-flex">
                <input className="form-control text-center me-3" />
                <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={handleAddToCart}>

                  Add to cart
                </button>
              </div>
              <Link className="btn btn-outline-dark flex-shrink-0 mt-4 px-5" to="/" >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  Related items section */}
        <section className="py-5 bg-light">
            <div className="container-fluid px-4 px-lg-5 mt-5">
                <h2 className="fw-bolder mb-4">Related products</h2>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top p-2" src={apple} alt="..." />
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                     {/* Product price */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* Product actions */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">View options</div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top p-2" src={apple} alt="..." />
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                     {/* Product price */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* Product actions */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">View options</div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top p-2" src={apple} alt="..." />
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                     {/* Product price */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* Product actions */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">View options</div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top p-2" src={apple} alt="..." />
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                     {/* Product price */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* Product actions */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">View options</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default ProductDetail