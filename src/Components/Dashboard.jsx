
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Function to delete data from API
  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`https://6646184051e227f23aadc227.mockapi.io/api/users/details/${id}`);
      if (res.status === 200) {
        console.log("User deleted successfully");
        getData();
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

    // Function to fetch user data from API
  const getData = async () => {
    try {
      let res = await axios.get("https://6646184051e227f23aadc227.mockapi.io/api/users/details");
      if (res.status === 200) {
        console.log("Data fetched successfully:", res.data);
        setUsers(res.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid" style={{ maxWidth: "1200px" }}>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <div className="row g-4">
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-line fa-3x text-primary" />
            <div className="ms-3">
              <p className="mb-2">Today Sale</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-bar fa-3x text-primary" />
            <div className="ms-3">
              <p className="mb-2">Total Sale</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-area fa-3x text-primary" />
            <div className="ms-3">
              <p className="mb-2">Today Revenue</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-pie fa-3x text-primary" />
            <div className="ms-3">
              <p className="mb-2">Total Revenue</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
      </div>
      <br />

<h2>Charts</h2>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Worldwide Sales</h6>
                <a href="#">Show All</a>
              </div>
              <img
                src="https://shrtlnk.dev/8q356h"
                alt="Chart_1"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Sales & Revenue</h6>
                <a href="#">Show All</a>
              </div>
              <img
                src="https://shrtlnk.dev/llui9f"
                alt="Chart_2"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <br />
      {/* Books Details */}
      <div className="row">
        <div className="col-md-12">
          <h2>Books Details</h2>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN Number</th>
                <th>Publication Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user.id}>
                  <td>{i + 1}</td>
                  <td>{user.Title}</td>
                  <td>{user.Author}</td>
                  <td>{user.ISBN_Number}</td>
                  <td>{user.Publication_Date}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/edit/${user.id}`)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      <br />
      {/* Author's Details */}
      <div className="row">
        <div className="col-md-12">
          <h2>Author's Details</h2>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th style={{ width: "60px" }}>S.No</th>
                <th>Authors Name</th>
                <th>BirthDate</th>
                <th>Biography</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user.id}>
                  <td>{i + 1}</td>
                  <td>{user.Authors_Name}</td>
                  <td>{user.Birth_Date}</td>
                  <td>{user.Biography}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/edit/${user.id}`)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>


          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
