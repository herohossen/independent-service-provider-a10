import "../../Styles/Signup.css";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
//   const [login, setLogin] = useState(false);
  const [confirmError, setConfirmError] = useState();


  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  //Create User
  const [
    createUserWithEmailAndPassword,
    createUser,
    createLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handeelFormInput = (e) => {
    // console.log(e.target.name, e.target.value);
    userInfo[e.target.name] = e.target.value;


  };
  //Prevent default FormRelod
  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    console.log("signup");
  };
  //Confir do not match

//   if (userInfo.password !== userInfo.confirmpassword) {
//     setConfirmError("password does not match");
//     console.log(confirmError);
//     return;
//   }


const navigate = useNavigate();
  useEffect(() => {
    if (createUser) {
      navigate("/home");
      
    }
    console.log(createUser);
  }, [createUser]);

  return (
    <div>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={(e) => handeelFormInput(e)}
            type="text"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={(e) => handeelFormInput(e)}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={(e) => handeelFormInput(e)}
            type="password"
            name="confirmpassword"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="text-danger">{confirmError}</p>
      </Form>
    </div>
  );
};

export default Signup;