import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Sidebar = ({ isOpen }) => {
  return (
    // Condition for opnen and close of sidebar
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="navbar bg-light navbar-light">
        <Link to="/" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            SpaceX
          </h3>
        </Link>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu6bEocetBxJkW5OAmjGNlLD5SPZ8eQQjZg&s" alt="" style={{ width: 40, height: 40 }} />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
          </div>
          <div className="ms-3">
            <h6 className="mb-0">Durai Prabhakar</h6>
            <span>Admin</span>
          </div>
        </div>
        <div className="navbar-nav w-100">
          <NavLink to="/" className="nav-item nav-link active">
            <i className="fa fa-tachometer-alt me-2" />
            Dashboard
          </NavLink>
          <NavLink to="/create" className="nav-item nav-link">
            <i className="fa-solid fa-folder-plus me-2" />
            Create Data
          </NavLink>
          <NavLink to="/alldetails" className="nav-item nav-link">
            <i className="fa fa-table me-2" />
            View Data
          </NavLink>
          <NavLink to="/" className="nav-item nav-link">
            <i className="fa fa-chart-bar me-2" />
            Charts
          </NavLink>
          <div className="nav-item dropdown">
            <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <i className="far fa-file-alt me-2" />
              Pages
            </NavLink>
            <div className="dropdown-menu bg-transparent border-0">
              <NavLink to="/" className="dropdown-item">Dashboard</NavLink>
              <NavLink to="/create" className="dropdown-item">Create Data</NavLink>
              <NavLink to="/edit/:id" className="dropdown-item">Edit Page</NavLink>
              <NavLink to="/alldetails" className="dropdown-item">All Data</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
