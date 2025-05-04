import React, { useEffect, useState } from "react";
import "./Login.css";
import background from "./loginImage/loginimage.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Login() {
  // password icon
  const [show, hide] = useState(false);

  function showandhide() {
    hide(!show);
  }

  // sign Up page par jane ke liye
  const SignUpPagenew = useNavigate();

  const SignUpPage = () => {
    setTimeout(() => {
      SignUpPagenew("/SignUp");
    }, 500);
  };

  const HomePage = useNavigate();

  const [Invalue, setInvalue] = useState({});

  const handleChange = (e) => {
    setInvalue({ ...Invalue, [e.target.name]: e.target.value });
  };

  async function FormValidation(e) {
    e.preventDefault();

    const ApiUrl = await fetch("http://localhost:3000/Student");
    const Apidata = await ApiUrl.json();

    const Finduser = Apidata.find(
      (user) =>
        user.FirstName === Invalue.Username &&
        user.Password === Invalue.Password
    );

    if (Finduser) {
      alert("Sign In Successfully......");
      localStorage.setItem("UserID", Finduser.id);
      setTimeout(() => {
        HomePage("/home");
      }, 1500);
    } else {
      alert("User not Found......");
      setInvalue({ Username: "", Password: "" });
    }
  }
  useEffect(() => {
    if (localStorage.getItem("UserID")) {
      HomePage("/home");
    }
  }, [HomePage]);

  return (
    <>
      <div className="login_container">
        <div className="Login_content">
          <div className="left_box">
            <div className="left_box_content">
              <h1>
                Get <br /> Everything <br /> You Want
              </h1>
              <p>
                You can get everything you want if you work hard, <br />
                trust the process, and sick to the pain.
              </p>
            </div>
          </div>
          <div className="right_box">
            <div className="right_box_container">
              <div className="right_box_heading">
                <h1>Welcome Back</h1>
                <p>Enter your Username and Password to access your account</p>
              </div>
              <div className="form_container">
                <form onSubmit={FormValidation} className="Login_form">
                  <h4>Username</h4>
                  <input
                    className="Username_input"
                    name="Username"
                    type="text"
                    placeholder="Enter Your Username"
                    required
                    value={Invalue.Username}
                    onChange={handleChange}
                  />
                  <h4>Password</h4>
                  <div className="password_input">
                    <input
                      name="Password"
                      type={show ? "Text" : "password"}
                      placeholder="Enter Your Password"
                      required
                      value={Invalue.Password}
                      onChange={handleChange}
                    />
                    <FaEye
                      className="showeye"
                      style={{ display: show ? "none" : "block" }}
                      onClick={showandhide}
                    />
                    <FaEyeSlash
                      style={{ display: show ? "block" : "none" }}
                      className="Closeeye"
                      onClick={showandhide}
                    />
                  </div>
                  <div className="forgot_password">
                    <div className="remember">
                      <input type="checkbox" />
                      <p>Remember me</p>
                    </div>
                    <div className="forgot_password_container">
                      <p>Forgot Password</p>
                    </div>
                  </div>

                  <div className="form_btn">
                    <button>Sign In</button>
                  </div>
                  <div className="form_btn_google">
                    <button>
                      <FcGoogle className="google_signIn_icon" />
                      Sign In with Google
                    </button>
                  </div>
                  <div className="SignUp">
                    <p>
                      Don't have an account?
                      <span onClick={SignUpPage}>Sign Up</span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Login };
