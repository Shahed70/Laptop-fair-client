import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App/App";
import "./Header.css";
const Header = () => {
  const [loggedInUser] = useContext(UserContext)
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/order">
                Order 
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/deshboard">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" >
                Deals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="search-form">
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            type="text"
            className="form-control mr-sm-2"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Header;
