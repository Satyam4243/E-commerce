import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const SignUp = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChangeInput = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");


    if (
      !formFields.name ||
      !formFields.email ||
      !formFields.password ||
      !formFields.confirmPassword ||
      !formFields.phone
    ) {
      setError("Please fill all fields");
      return;
    }

    if (formFields.password !== formFields.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formFields.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formFields.name,
          email: formFields.email,
          password: formFields.password,
          phone: formFields.phone
        })
      });

      const data = await response.json();

      if (data?.success) {
        // Store token & user
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/");
      } else {
        setError(data?.message || "Something went wrong");
      }

    } catch (err) {
      setError("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="authPage">
      <div className="container">
        <div className="authBox card p-4 shadow">

          <h2 className="mb-4">Sign Up</h2>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group mb-3">
              <input
                type="text"
                name="name"
                value={formFields.name}
                onChange={onChangeInput}
                className="form-control"
                placeholder="Full Name"
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="email"
                name="email"
                value={formFields.email}
                onChange={onChangeInput}
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                name="phone"
                value={formFields.phone}
                onChange={onChangeInput}
                className="form-control"
                placeholder="Phone"
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                name="password"
                value={formFields.password}
                onChange={onChangeInput}
                className="form-control"
                placeholder="Password"
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group mb-4">
              <input
                type="password"
                name="confirmPassword"
                value={formFields.confirmPassword}
                onChange={onChangeInput}
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>

            <Button
              type="submit"
              className="btn-g btn-lg w-100"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Register"}
            </Button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default SignUp;
