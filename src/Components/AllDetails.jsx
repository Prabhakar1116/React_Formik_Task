// importing components
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// function to get the data from the backend
const AllDetails = ({ setUserId }) => {
  const [users, setUsers] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

// fetching data from api
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6646184051e227f23aadc227.mockapi.io/api/users/details"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

// delete function
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://6646184051e227f23aadc227.mockapi.io/api/users/details/${id}`
      );
      setDeleteData(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    // page structure and display
    <div className="container-fluid mt-5">
      <h1 className="U_title">User Details</h1>

      <h2>Book Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" className="t_col">S.no</th>
              <th scope="col" className="t_col">Title</th>
              <th scope="col" className="t_col">Author</th>
              <th scope="col" className="t_col">ISBN Number</th>
              <th scope="col" className="t_col">Publication Date</th>
              <th scope="col" className="t_col">Edit</th>
              <th scope="col" className="t_col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td className="t_data">{user.Title}</td>
                  <td className="t_data">{user.Author}</td>
                  <td className="t_data">{user.ISBN_Number}</td>
                  <td className="t_data">{user.Publication_Date}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/edit/${user.id}`)}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user.id)}
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No books found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <h2>Author Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" className="t_col">S.no</th>
              <th scope="col" className="t_col">Author's Name</th>
              <th scope="col" className="t_col">Birth Date</th>
              <th scope="col" className="t_col">Biography</th>
              <th scope="col" className="t_col">Edit</th>
              <th scope="col" className="t_col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td className="t_data">{user.Authors_Name}</td>
                  <td className="t_data">{user.Birth_Date}</td>
                  <td className="t_data">{user.Biography}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/edit/${user.id}`)}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user.id)}
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No authors found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => navigate("/create")}
        type="button"
        className="btn btn-outline-primary btn-lg"
      >
        Add Users
      </button>
    </div>
  );
};

export default AllDetails;
