import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";
import axios from "axios";
import bcrypt from "bcryptjs-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useToastr from "../components/toast";

const Login = ({ authorisation }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const [success,error]=useToastr();

  const methods = useForm({
    shouldUnregister: true,
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmitData = async (data) => {
    setLoading(true);
    await delay(500);
    console.log(`Username :${data.username}, Password :${data.password}`);

    const userData = {
      username: data.username,
      password: data.password,
    };

    const res = await axios
      .post(`http://localhost:8080/authentication/login`, userData)
      .then((res) => {
        if (res.status == "200") {
          console.log(res.status);
          success("Sucessfull Loged In")
          authorisation(true);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        error("Invalid Credentials")
        setShow(true);
      });

    setLoading(false);
  };
  const handlePassword = () => {};
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="sign-in__wrapper ">
      <div className="sign-in__backdrop"></div>
      <Form
        className="shadow p-4 bg-white rounded"
        onSubmit={handleSubmit(onSubmitData)}
      >
        <div className="h4 mb-2 text-center">Login In</div>
        {false ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            required
            {...register("username")}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          {/* <Form.Check type="checkbox" label="Remember me" /> */}
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}

        <span className="span">
          New User ?
        <Link to="/sign-up">
          Create Account
        </Link>
        </span>
      </Form>
    </div>
  );
};

export default Login;
