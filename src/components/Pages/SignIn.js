import "../../Styles/Signin.css";
import Signup from '../../components/Pages/Signup'
import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
const SignIn = () => {
  //   const [login, setLogin] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  // console.log(userInfo);

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  // console.log(hookError);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // console.log(googleError);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, email: '' });
    } else {
      setError({ ...error, email: 'Invalid Email' });
      setUserInfo({ ...userInfo, email: '' });
    }
  };
  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setError({ ...error, password: '' });
    } else {
      setError({ ...error, password: 'Please provide 6 digit' });
      setUserInfo({ ...userInfo, password: '' });
    }
  };

  const handleSubmitSineIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
    }
  }, [user, googleUser]);

  if (loading || googleLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="containersignin">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
<Signup/>
        </div>
{/* Login Started */}
        <div className="login">
        <form onSubmit={handleSubmitSineIn}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="text"
              name="email"
              onChange={handleEmailChange}
              placeholder="Email"
              required=""
            />
            {error?.email && (
              <p className="error-message text-danger">{error.email}</p>
            )}
            <input
              type="password"
              name="password"
              onChange={handlePasswordChange}
              placeholder="Password"
              required=""
            />
                        {error?.password && (
              <p className="error-message text-danger">{error.password}</p>
            )}
            <p>
              Forget Password?{" "}
              <Link
                to=""
                className="btn btn-link text-primary pe-auto text-decoration-none"
                onClick={() => sendPasswordResetEmail(userInfo.email)}
              >
                Reset Password
              </Link>{" "}
            </p>
            <hr />
            <button className="btn-login">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
