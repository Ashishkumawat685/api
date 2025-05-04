import React, { useState } from "react";
import "../SignUp.css";
import { useNavigate } from "react-router-dom";

function StudentEdit() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Mobile: "",
    Password: "",
    CunPassword: "",
  });

  // const formDatainput = {
  //   FirstName: `${formData.FirstName}`,
  //   LastName: `${formData.LastName}`,
  //   Email: `${formData.Email}`,
  //   Mobile: `${formData.Mobile}`,
  //   Password: `${formData.Password}`,
  //   CunPassword: `${formData.CunPassword}`,
  // };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Productidget = localStorage.getItem("productid");
  {
    console.log(Productidget);
  }

  const [ApiData, setApiData] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const ApiUrlget = await fetch(
      `http://localhost:3000/Student/${Productidget}`
    );
    const ApiData = await ApiUrlget.json();
    setApiData(ApiData);

    const ApiUrl = await fetch(
      `http://localhost:3000/Student/${Productidget}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          FirstName:
            `${formData.FirstName}`.length > 0
              ? `${formData.FirstName}`
              : ApiData.FirstName,
          LastName:
            `${formData.LastName}`.length > 0
              ? `${formData.LastName}`
              : ApiData.LastName,
          Email:
            `${formData.Email}`.length > 0
              ? `${formData.Email}`
              : ApiData.Email,
          Mobile:
            `${formData.Mobile}`.length > 0
              ? `${formData.Mobile}`
              : ApiData.Mobile,
          Password:
            `${formData.Password}`.length > 0
              ? `${formData.Password}`
              : ApiData.Password,
          CunPassword:
            `${formData.CunPassword}`.length > 0
              ? `${formData.CunPassword}`
              : ApiData.CunPassword,
        }),
      }
    )
      .then(() => {
        alert("Form editted Successfully!");
        setFormData({
          FirstName: "",
          LastName: "",
          Email: "",
          Mobile: "",
          Password: "",
          CunPassword: "",
        });
        setTimeout(() => {
          SignInPagenew("/StudentData");
        }, 500);
      })
      .catch(() => {
        alert(" something wrong...");
      });
  }

  const SignInPagenew = useNavigate();

  const SignInPage = (e) => {
    e.preventDefault();
    setTimeout(() => {
      SignInPagenew("/StudentData");
    }, 500);
  };
  return (
    <>
      <div className="signup-container">
        <form className="signup-form">
          <h2>Sign Up</h2>
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            value={formData.FirstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            value={formData.LastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Mobile"
            placeholder="Mobile"
            value={formData.Mobile}
            onChange={handleChange}
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={formData.Password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="CunPassword"
            placeholder="Confirm Password"
            value={formData.CunPassword}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Edit
          </button>
          <button onClick={SignInPage}>Go Back</button>
        </form>
      </div>
    </>
  );
}

export { StudentEdit };
