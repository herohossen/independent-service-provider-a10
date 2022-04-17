import "../../Styles/Signin.css";
import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
const SignIn = () => {
  //   const [login, setLogin] = useState(false);
  const [confirmError, setConfirmError] = useState();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  console.log(userInfo.email, userInfo.password, userInfo.confirmpassword);
  //Create User start
  const [
    createUserWithEmailAndPassword,
    createUser,
    createLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

  const handeelFormInput = (e) => {
    userInfo[e.target.name] = e.target.value;
  };
  //Prevent default FormRelod
  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  //Create user end

  //User signIn Start

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //User signIn End

  //Confir do not match

  //   if (userInfo.password !== userInfo.confirmpassword) {
  //     setConfirmError("password does not match");
  //     console.log(confirmError);
  //     return;
  //   }

  //Page Redirection
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (createUser || user) {
        navigate(from, { replace: true });
    }
    console.log(createUser);
  }, [createUser, user]);
  return (
    <div className="container-auth">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSignUp}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            {/* <input type="text" name="txt" placeholder="User name" required=""/> */}
            <input
              type="text"
              name="email"
              onBlur={(e) => handeelFormInput(e)}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              onBlur={(e) => handeelFormInput(e)}
              placeholder="Password"
            />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
            />
            <p className="text-danger">Password reset</p>
            <button>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleSignUp}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="text"
              name="email"
              onBlur={(e) => handeelFormInput(e)}
              placeholder="Email"
              required=""
            />
            <input
              type="password"
              name="password"
              onBlur={(e) => handeelFormInput(e)}
              placeholder="Password"
              required=""
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;