import React from "react";
import { Formik } from "formik";
import { setLoginData } from "../../store/auth/login/actions";
import { useDispatch } from "react-redux";
import Error from "../../shared/error";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(setLoginData(values));
    resetForm({});
  };

  return (
    <div className="">
      <Formik
        initialValues={{
          name: "",
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
          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({ errors, handleSubmit, handleChange, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <h1>SIGN IN</h1>
            <Form.Group controlId="formName">
              <Form.Label>Имя</Form.Label>
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
              <Form.Label>Пароль</Form.Label>
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

export default Login;
