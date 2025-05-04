// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Mobile: "",
    Password: "",
    CunPassword: "",
  });

  const formDatainput = {
    FirstName: `${formData.FirstName}`,
    LastName: `${formData.LastName}`,
    Email: `${formData.Email}`,
    Mobile: `${formData.Mobile}`,
    Password: `${formData.Password}`,
    CunPassword: `${formData.CunPassword}`,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const ApiUrl = await fetch("http://localhost:3000/Student", {
      method: "POST",
      body: JSON.stringify(formDatainput),
    })
      .then(() => {
        alert("Form Submitted Successfully!");
        setFormData({
          FirstName: "",
          LastName: "",
          Email: "",
          Mobile: "",
          Password: "",
          CunPassword: "",
        });
        setTimeout(() => {
          SignInPagenew("/");
        }, 500);
      })
      .catch(() => {
        alert(" something wrong...");
      });
  }

  
  const SignInPagenew = useNavigate();

  const SignInPage = () => {
    setTimeout(() => {
      SignInPagenew("/");
    }, 500);
  };


  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            value={formData.FirstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            value={formData.LastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Mobile"
            placeholder="Mobile"
            value={formData.Mobile}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="CunPassword"
            placeholder="Confirm Password"
            value={formData.CunPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
          <button type="submit" onClick={SignInPage}>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export { SignUp };
