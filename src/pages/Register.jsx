import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import { useHistory } from "react-router";
const Register = () => {
  const [email, setEmail] = useState();
  const [displayName, setDisplayName] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
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
  //register handler
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const RegisterData = {
        email,
        password,
        passwordCheck,
        displayName,
      };

      const loginRes = await axios.post(
        "http://localhost:5000/users/register",
        RegisterData
      );
      if (loginRes.data.token) {
        localStorage.setItem("auth-token", loginRes.data.token);
        checkLoggedIn();
      }
      // history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  if (!isLoggedIn) {
    return (
      <div className="h-screen flex bg-gray-bg1">
        <div
          dir="rtl"
          className="w-full max-w-md m-auto bg-secondary rounded-lg border border-primaryBorder shadow-default py-10 px-16"
        >
          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
            تسجيل حساب جديدد
          </h1>

          <form onSubmit={handleRegister}>
            <div>
              <label className="text-primary">اسم المستخدم</label>
              <input
                value={displayName}
                type="text"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 mt-1`}
                placeholder="اسمك"
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-primary">البريد الالكتروني</label>
              <input
                value={email}
                type="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 mt-1`}
                placeholder="بريدك"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-primary">كلمه المرور</label>
              <input
                value={password}
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 mt-1`}
                placeholder="كلمه المرور"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="text-primary">اعد ادخال كلمه المرور</label>
              <input
                value={passwordCheck}
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 mt-1`}
                placeholder="كلمه المرور"
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button className="bg-btn text-btn px-3 py-2 rounded-md text-sm font-medium ">
                تسجيل
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Register;
