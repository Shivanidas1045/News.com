
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.email || !formData.password) {
          setError("All fields are required");
          return;
      }
      setError("");
      navigate("/");
  };

  return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card p-4 shadow w-100 border-info" style={{ maxWidth: "400px" }}>
                           <h2 className="text-center fw-semibold fs-4"><span class='badge bg-white border border-info text-info fw-7 fs-3'>Log</span >  <span class='badge bg-black border border-info text-info fw-7 fs-3'>IN</span></h2>

              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email"
                       name="email"
                       placeholder="Enter your email.."
                        className="form-control" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" name="password"
                      placeholder="Enter your password..."
                       className="form-control" value={formData.password} onChange={handleChange} required />
                  </div>
                           <button type="submit" className="btn btn-dark btn-outline-info w-100">Login</button>

              </form>
              <p className="text-center mt-3">Don't have an account? <span className="text-primary cursor-pointer" style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>Sign Up</span></p>
          </div>
      </div>
  );
};
export default Login;





// import React from 'react';
// import {Link} from 'react-router-dom';


// const Login = () => {
//     return (
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card p-4">
//             <h2 className="text-center fw-semibold fs-4"><span class='badge bg-white border border-info text-info fw-7 fs-3'>Log</span >  <span class='badge bg-black border border-info text-info fw-7 fs-3'>IN</span></h2>

//               <form>
//                 <div className="mb-3">
//                   <label className="form-label">Email</label>
//                   <input type="email" className="form-control" />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Password</label>
//                   <input type="password" className="form-control" />
//                 </div>
//                 <button type="submit" className="btn btn-dark btn-outline-info w-100">Login</button>
//               </form>
//               <div className="text-center mt-3">
//                 <Link to="/signup">Don't have an account? Sign Up</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   export default Login