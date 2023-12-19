import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/product");
    }
  }, []);

  const handleSave = async (e) => {
    console.log(email, password);
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8500/login", {
        email: email,
        password: password,
      });

      console.log(response.data);
      toast.success('User Login Successfully!');
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/product");
    } catch (error) {
      toast.error(`Error registering user: ${error.message}`);
      console.error("Plz Enter Correct Details", error);
    }
    // Reset the form inputs

    setEmail(" ");
    setPassword(" ");
  };

  return (
    <>
    

      <h2 className="text-center App">Login User</h2>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 ">
            {/* form   */}
            <form className="mb-5 border border-primary p-4 m-3 rounded">
              {/* email */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  aria-describedby="eamilUser"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* password */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  aria-describedby="passoword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-5"
                onClick={handleSave}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Login;
