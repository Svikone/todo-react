import React from "react";
import { Formik } from "formik";
import httpServices from "../../services/http.service";
import { connect, Provider, useDispatch } from "react-redux";
import { loginError } from "../../store/auth/login/actions";
import Error from "../../shared/error";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Registration = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    httpServices
      .post("user/register", values)
      .then((response) => {
        resetForm({});
        window.location.assign("login");
      })
      .catch((error) => {
        const errorMessagge = error.response.data.message;
        dispatch(loginError(errorMessagge));
      });
  };

  return (
    <div className="">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validate={(value) => {
          let errors = {};
          if (!value.name) {
            errors.name = "Fill in the name";
          }
          if (!value.password) {
            errors.password = "Fill in your password";
          }
          if (!value.email) {
            errors.email = "Fill in your email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({ errors, handleSubmit, handleChange, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <h1>SIGN UP</h1>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={values.email}
                name="email"
                type="email"
                placeholder="Email..."
                onChange={handleChange}
              />
            </Form.Group>

            {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
            ) : null}

            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={values.name}
                name="name"
                type="text"
                placeholder="Name..."
                onChange={handleChange}
              />
            </Form.Group>

            {errors.name && touched.name ? (
              <div className="error">{errors.name}</div>
            ) : null}

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={values.password}
                name="password"
                type="password"
                placeholder="Password..."
                onChange={handleChange}
              />
            </Form.Group>

            {errors.password && touched.password ? (
              <div className="error">{errors.password}</div>
            ) : null}

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
      <Error />
    </div>
  );
};

export default Registration;
