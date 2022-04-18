import "../../Styles/Signup.css";
import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // , { sendEmailVerification: true }
  // console.log(hookError);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // console.log(googleError);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, email: '' });
    } else {
      setError({ ...error, email: 'Email not Valid' });
      setUserInfo({ ...userInfo, email: '' });
    }
    // console.log(e.target.value);
  };

  const handlePasswordChang = (e) => {
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

  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setError({ ...error, confirmPassword: '' });
    } else {
      setError({ ...error, confirmPassword: "Password don't match" });
      setUserInfo({ ...userInfo, confirmPassword: '' });
    }
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  // side effect user navigation related
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
      // navigate('/signin');
    }
  }, [user, googleUser]);

  // loading related
  if (loading || googleLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="signup">
      <form onSubmit={handleSubmitSignUp}>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        {/* <input type="text" name="txt" placeholder="User name" required=""/> */}
        <input
          type="text"
          name="email"
          onChange={handleEmailChange}
          placeholder="Email"
        />
        {error?.email && (
          <p className="error-message text-danger">{error.email}</p>
        )}
        <input
          type="password"
          name="password"
          onChange={ handlePasswordChang}
          placeholder="Password"
        />
           {/* password error massage */}
           {error?.password && (
              <p className="error-message text-danger">{error.password}</p>
            )}
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          onChange={handleConfirmPassword}
        />
                               {error?.confirmPassword && (
              <p className="error-message text-danger">
                {error.confirmPassword}
              </p>
            )}

        <p className="text-danger">Password reset</p>
        <button className="btn-login">Sign up</button>
        <button onClick={() => signInWithGoogle()} className="btn-login">
          Google Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;