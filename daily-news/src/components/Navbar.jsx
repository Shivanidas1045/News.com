import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border border-info border-1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="badge bg-white border border-info text-info fw-7 fs-3">Daily</span> <span className="badge bg-black border border-info text-info fw-7 fs-3">News</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">News Feed</Link>
            </li> */}
          </ul>
          <div className="d-flex gap-2">
            <Link className="btn btn-outline-info" to="/signup">Sign Up</Link>
            <Link className="btn btn-outline-info" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






