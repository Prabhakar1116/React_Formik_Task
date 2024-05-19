// importing components
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import '../App.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div>
      <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <Link to="/Sidebar" className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0">
            <i className="fa fa-hashtag" />
          </h2>
        </Link>
        <button className="sidebar-toggler flex-shrink-0" onClick={toggleSidebar}>
          <i className="fa fa-bars" />
        </button>
        <form className="d-none d-md-flex ms-4">
          <input className="form-control border-0" type="search" placeholder="Search" />
        </form>
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <i className="fa-solid fa-database me-lg-2" />
              <span className="d-none d-lg-inline-flex">User Data</span>
            </button>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <NavLink to="/create" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-folder-plus  me-lg-2" />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">Create Data</h6>
                  </div>
                </div>
              </NavLink>
              <hr className="dropdown-divider" />
              <NavLink to="/alldetails" className="dropdown-item">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-table  me-lg-2" />
                  <div className="ms-2">
                    <h6 className="fw-normal mb-0">All Details</h6>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <img className="rounded-circle me-lg-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu6bEocetBxJkW5OAmjGNlLD5SPZ8eQQjZg&s" alt="" style={{ width: 40, height: 40 }} />
              <span className="d-none d-lg-inline-flex">Durai Prabhakar</span>
            </button>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <NavLink to="#" className="dropdown-item">My Profile</NavLink>
              <NavLink to="#" className="dropdown-item">Settings</NavLink>
              <NavLink to="#" className="dropdown-item">Log Out</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
