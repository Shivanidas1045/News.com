import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password || !formData.confirmPassword) {
            setError("All fields are required");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        navigate("/login");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow w-100  border-info" style={{ maxWidth: "400px" }}>
                         <h2 className="text-center fw-semibold fs-4"><span class='badge bg-white border border-info text-info fw-7 fs-3'>Sign</span >  <span class='badge bg-black border border-info text-info fw-7 fs-3'>UP</span></h2>

                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                             <button type="submit" className="btn btn-dark btn-outline-info w-100">Sign Up</button>
                    </form>
                <p className="text-center mt-3">Already have an account? <span className="text-primary cursor-pointer" style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>Login</span></p>
            </div>
        </div>
    );
};

export default Signup;












// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';


// const Signup = () => {
//     const [formData, setFormData] = useState({
//       name: "",
//       email: "",
//       password: "",
//     });
//     const [errors, setErrors] = useState({});
  
//     const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
  
//     const validate = () => {
//       let errors = {};
//       if (!formData.name) errors.name = "Name is required";
//       if (!formData.email) errors.email = "Email is required";
//       else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email format";
//       if (!formData.password) errors.password = "Password is required";
//       else if (formData.password.length < 6) errors.password = "Password must be at least 6 characters long";
//       return errors;
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const validationErrors = validate();
//       if (Object.keys(validationErrors).length === 0) {
//         console.log("Form Submitted", formData);
//       } else {
//         setErrors(validationErrors);
//       }
//     };
  
//     return (
//       <div className="container mt-5 rounded-3 ">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card p-4">
//               <h2 className="text-center fw-semibold fs-4"><span class='badge bg-white border border-info text-info fw-7 fs-3'>Sign</span >  <span class='badge bg-black border border-info text-info fw-7 fs-3'>UP</span></h2>

//               <form onSubmit={handleSubmit}>
//                 <div className="mb-5">
//                   <label className="form-label">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter you name..."
//                     className={`form-control ${errors.name ? "is-invalid" : ""}`}
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your Email..."
//                     className={`form-control ${errors.email ? "is-invalid" : ""}`}
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Enter your password..."
//                     className={`form-control ${errors.password ? "is-invalid" : ""}`}
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                   {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                 </div>
//                 <button type="submit" className="btn btn-dark btn-outline-info w-100">Sign Up</button>
//               </form>
//               <div className="text-center mt-3">
//                 <Link to="/login">Already have an account? Login</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   export default Signup;


