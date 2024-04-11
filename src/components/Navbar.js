import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-success position-sticky"
        style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2u2K-sWPka3SMv_P6xGJKONzisu8AYLyK8PctjTVDEQ&s"
                style={{ width: "100px", height: "auto" }}
                alt="Logo"
                className="logo-img"
              />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-bg-success"
                  style={{ fontSize: "20px"}}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              {(localStorage.getItem("token"))? 
                <li className="nav-item">
                <Link
                  className="nav-link active text-bg-success"
                  style={{ fontSize: "20px"}}
                  aria-current="page"
                  href="/"
                >
                  My Orders
                </Link>
              </li>
              : ""
              }
            </ul>
            {
              !(localStorage.getItem("token")) ? 
              <div className="d-flex justify-content-center">
              <Link
                className="btn bg-white text-success mx-1"
                to="/login"
                style={{ fontSize: "25px" ,textAlign:"center"}}
              >
                Login
              </Link>

              <Link
                className="btn bg-white text-success mx-1"
                to="/signup"
                style={{ fontSize: "25px", textAlign:"center"}}
              >
                Signup
              </Link>
            </div>
             : 
             <div>
              <div className="btn bg-white text-success mx-2">
                My Cart
              </div>

              <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
               Logout
              </div>

             </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
