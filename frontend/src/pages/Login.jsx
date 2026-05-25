import {
  useState,
  useContext
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import API from "../services/api";

import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const { login } =
    useContext(AuthContext);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: ""
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.email ||
      !formData.password
    ) {
      return alert(
        "All fields required"
      );
    }

    try {

      setLoading(true);

      const res = await API.post(
        "/auth/login",
        formData
      );

      login(res.data);

      setLoading(false);

      if (
        res.data.user.role ===
        "admin"
      ) {

        navigate("/admin");

      } else if (
        res.data.user.role ===
        "manager"
      ) {

        navigate("/manager");

      } else {

        navigate("/user");
      }

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-page">

      <form
        className="auth-card"
        onSubmit={handleSubmit}
      >

        <h1>
          Welcome Back
        </h1>

        <p>
          Login to continue
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
        >
          {
            loading
              ? "Please wait..."
              : "Login"
          }
        </button>

        <span>
          Don't have account?

          <Link to="/register">
            Register
          </Link>
        </span>

      </form>

    </div>
  );
};

export default Login;