import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import "./login.css";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useToastr from '../components/toast';

export default function SignUp() {

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
  
      const userData={
          userName:data.username,
          password:data.password,
          roles:"ROLE_ADMIN"
      }
  
      const res = await axios.post(`http://localhost:8080/user/add`, userData)
      .then((res)=>{
        console.log(res.status)
        console.log(res)
        success("User Added Successfully")
          if(res.status=='200'){
              setShow(true);
              navigate("/");
          }
      })
      .catch((err) => {
        error("Something went Wrong try again")
        console.log(err);
      });
      
      setLoading(false);
    };

    const handlePassword = () => {};
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

  return (
    <div
      className="sign-in__wrapper"
    >
      <div className="sign-in__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit(onSubmitData)}>
        <div className="h4 mb-2 text-center">Sign In</div>
        {show ? (
          <Alert
            className="mb-2"
            variant="success"
            onClose={() => setShow(false)}
            dismissible
          >
            User added Successfully.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Add Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            required
            {...register("username")}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Create Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Add Password"
            required
            {...register("password")}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          {/* <Form.Check type="checkbox" label="Remember me" /> */}
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Create Account
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Adding user
          </Button>
        )}
      </Form>
    </div>
  )
}
