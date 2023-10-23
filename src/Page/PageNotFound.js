import React from 'react'
import { Link } from "react-router-dom"


const PageNotFound = () => {
    return (
        <div>
      
        <h2 className='text-center text-body-secondary mt-5'>Page Not Found </h2>
        <h4 className='text-center text-danger mt-5' >404</h4>
         <div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                <Link to="/" className='py-2  fw-semibold text-decoration-none'>Go to Home Page</Link>
                </div>
            </div>
         </div>
     
        </div>
     
      )
}

export default PageNotFound