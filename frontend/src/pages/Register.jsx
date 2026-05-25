import { useState } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
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
  !formData.name ||
  !formData.email ||
  !formData.password
) {
  return alert(
    "Please fill all fields"
  );
}

    try {
      await API.post(
        "/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="auth-page">
      <form
        className="auth-card"
        onSubmit={handleSubmit}
      >
        <h1>Create Account</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

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

        <select
          name="role"
          onChange={handleChange}
        >
          <option value="user">
            User
          </option>

          <option value="manager">
            Manager
          </option>

          <option value="admin">
            Admin
          </option>
        </select>

        <button type="submit">
          Register
        </button>

        <span>
          Already have account?
          <Link to="/">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;