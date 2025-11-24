import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Style from "./adminstyle/LoginForm.module.css";

// import constants from "../services/constants";
// import { useDispatch } from "react-redux";
// import { userlogin } from "../store/authSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!email || !password) {
    //   setError("Please enter both email and password.");
    //   return;
    // }

    // try {
    //   const response = await fetch(`${constants.API_BASE_URL}login`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (!response.ok) {
    //     setError("Invalid email or password.");
    //     return;
    //   }

    //   const data = await response.json();

    //   const user = data.user;
    //   const token = data.token;

    //   // store data
    //   localStorage.setItem("token", token);
    //   localStorage.setItem("userDetail", JSON.stringify(user));
    //   localStorage.setItem(
    //     "authData",
    //     JSON.stringify({
    //       isAuthenticatedTq: true,
    //       user,
    //       token,
    //     })
    //   );

    //   dispatch(userlogin({ user, token }));

    //   setError("");

    //   // redirect user
    //   if (user.role !== "user" && user.modules?.length > 0) {
    //     navigate(`/admin/${user.modules[0]}`);
    //   } else {
    //     navigate("/admin/menu");
    //   }
    // } catch (err) {
    //   setError("Something went wrong. Please try again.");
    // }
  };

  return (
    <div className={Style.Loginheader}>
      <div className={Style.loginContainer}>
        <h2>Login</h2>
        {error && <p className={Style.error}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className={Style.formGroup}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={Style.formGroup}>
            <label>Password</label>
            <div className={Style.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={Style.showPasswordButton}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button className={Style.ButtonStyle} type="submit">
            Login
          </button>
        </form>

        <Link to="/forget-password" className={Style.forgotPasswordLink}>
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
