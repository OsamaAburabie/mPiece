import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import { useHistory } from "react-router";
import Background from "../images/registerBackground.jpg";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { isLoggedIn, checkLoggedIn, role } = useContext(AuthContext);
  const [error, setError] = useState();
  const history = useHistory();
  //check if user is logged in already redirect to '/' and if they are admin redirect to dashboard
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
    //eslint-disable-next-line
  }, [isLoggedIn]);

  //login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const loginData = {
        email,
        password,
      };

      const loginRes = await axios.post(
        "http://localhost:5000/users/login",
        loginData
      );
      if (loginRes.data.token) {
        localStorage.setItem("auth-token", loginRes.data.token);
        checkLoggedIn();
      }
      // history.push("/");
    } catch (err) {
      // setError(err);
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  if (!isLoggedIn) {
    return (
      <div
        dir="rtl"
        className="h-screen grid place-items-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <form
          onSubmit={handleLogin}
          className="flex flex-wrap m-3 md:w-96 bg-secondary px-7 py-3 rounded-lg"
        >
          <label className="mb-7 text-center w-full text-2xl font-bold text-primary">
            تسجيل الدخول
          </label>
          {error && (
            <label className="mb-7 text-center w-full text-red-600">
              {error}
            </label>
          )}

          <input
            value={email}
            className="w-full mb-3 border-none  p-3 rounded-md   bg-primary text-primary outline-none"
            type="email"
            placeholder="بريدك"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            value={password}
            className="w-full mb-3 border-none  p-3 rounded-md   bg-primary text-primary outline-none"
            type="password"
            placeholder="كلمه المرور"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className=" book__btn w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-btn text-base font-medium text-btn  focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
          >
            الدخول
          </button>
        </form>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Login;
