// importing components
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// function to get the data from the backend

const Create = () => {
  const navigate = useNavigate();

  // formik declaration
  const formik = useFormik({
    initialValues: {
      Title: "",
      Author: "",
      ISBN_Number: "",
      Publication_Date: "",
      Authors_Name: "",
      Birth_Date: "",
      Biography: "",
    },
    validationSchema: Yup.object({
      Title: Yup.string()
        .required("Title is required")
        .min(2, "Title must be at least 2 characters long"),
      Author: Yup.string().required("Author is required"),
      ISBN_Number: Yup.string()
        .required("ISBN is required")
        .matches(/^(97(8|9))?\d{9}(\d|X)$/, "Invalid ISBN format"),
      Publication_Date: Yup.date().required("Publication Date is required"),
      Authors_Name: Yup.string().required("Author's Name is required"),
      Birth_Date: Yup.date().required("Birth Date is required"),
      Biography: Yup.string().required("Biography is required"),
    }),
    onSubmit: async (values) => {
      try {
        let res = await axios.post(
          "https://6646184051e227f23aadc227.mockapi.io/api/users/details",
          values
        );
        if (res.status === 201) {
          navigate("/");
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
  });

  return (
    <div className="container mt-5">
      <h2 className="form-title">Create UserDetails</h2>
      <div className="card p-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              name="Title"
              value={formik.values.Title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Title"
            />
            {formik.touched.Title && formik.errors.Title ? (
              <div style={{ color: "red" }}>{formik.errors.Title}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Author:</label>
            <input
              type="text"
              className="form-control"
              name="Author"
              value={formik.values.Author}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Author"
            />
            {formik.touched.Author && formik.errors.Author ? (
              <div style={{ color: "red" }}>{formik.errors.Author}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">ISBN Number:</label>
            <input
              type="text"
              className="form-control"
              name="ISBN_Number"
              value={formik.values.ISBN_Number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ISBN Number"
            />
            {formik.touched.ISBN_Number && formik.errors.ISBN_Number ? (
              <div style={{ color: "red" }}>{formik.errors.ISBN_Number}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Publication Date:</label>
            <input
              type="date"
              className="form-control"
              name="Publication_Date"
              value={formik.values.Publication_Date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Publication Date"
            />
            {formik.touched.Publication_Date && formik.errors.Publication_Date ? (
              <div style={{ color: "red" }}>{formik.errors.Publication_Date}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Author's Name:</label>
            <input
              type="text"
              className="form-control"
              name="Authors_Name"
              value={formik.values.Authors_Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Author's Name"
            />
            {formik.touched.Authors_Name && formik.errors.Authors_Name ? (
              <div style={{ color: "red" }}>{formik.errors.Authors_Name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Birth Date:</label>
            <input
              type="date"
              className="form-control"
              name="Birth_Date"
              value={formik.values.Birth_Date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Birth Date"
            />
            {formik.touched.Birth_Date && formik.errors.Birth_Date ? (
              <div style={{ color: "red" }}>{formik.errors.Birth_Date}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Biography:</label>
            <textarea
              className="form-control"
              name="Biography"
              value={formik.values.Biography}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Biography"
            />
            {formik.touched.Biography && formik.errors.Biography ? (
              <div style={{ color: "red" }}>{formik.errors.Biography}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
