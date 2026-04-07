import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { MyContext } from "../../App";

// FIREBASE IMPORT
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ===== HANDLE INPUT ===
  const onChangeInput = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  // == NORMAL LOGIN =======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formFields.email || !formFields.password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      //   const response = await fetch("/api/user/signin", {
      const response = await fetch("http://localhost:8000/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFields),
      });

      const data = await response.json();

      if (data?.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("isLogin", true);

        context.signIn();

        if (data.user.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setError(data?.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Server Error");
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN =======
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      //  Send Google user data to backend
      //   const response = await fetch("/api/user/googleLogin", {
      const response = await fetch(
        "http://localhost:8000/api/user/googleLogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          }),
        },
      );

      const data = await response.json();

      if (data?.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("isLogin", true);

        context.signIn();

        if (data.user.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      setError("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="authPage">
      <div className="container">
        <div className="authBox card p-4 shadow">
          <h2 className="mb-4">Sign In</h2>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
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

            <div className="form-group mb-4">
              <input
                type="password"
                name="password"
                value={formFields.password}
                onChange={onChangeInput}
                className="form-control"
                placeholder="Password"
              />
            </div>

            <Button
              type="submit"
              className="btn-g btn-lg w-100"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Login"}
            </Button>
          </form>

          {/* GOOGLE BUTTON */}
          <Button
            onClick={handleGoogleLogin}
            className="btn btn-danger btn-lg w-100 mt-3"
            disabled={loading}
          >
            Continue with Google
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
