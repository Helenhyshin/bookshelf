import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Forms.css";
import { Link } from "react-router-dom";

function LogInForm() {
  const [userinfo, setUserinfo] = useState({ username: "", password: "" });

  function handleChange(evt) {
    setUserinfo({
      ...userinfo,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setUserinfo({ fullname: "", username: "", password: "" });
  }

  return (
    <div class="form-container">
      <div>
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/01/CHILDRENS-BOOK-ILLUSTRATION.jpg?auto=format&q=60&w=1860&h=1090&fit=crop&crop=faces"
          alt="book"
          className="log-in-img"
        />
      </div>
      <div>
        <form className="log-in-form" onSubmit={handleSubmit}>
          <input
            name="fullname"
            type="text"
            placeholder="Enter Your Full Name"
            value={userinfo.fullname}
            onChange={handleChange}
          />
          <input
            name="username"
            type="email"
            placeholder="Enter Your Email"
            value={userinfo.username}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={userinfo.password}
            onChange={handleChange}
          />
          <button>Sign Up</button>
        </form>
        Already have an account? <Link to="/login">login</Link>
      </div>
    </div>
  );
}

export default LogInForm;
