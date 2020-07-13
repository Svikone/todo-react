import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import environment from "../../environment/environment";

function validateEmail(value) {
  let error;

  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = "Invalid email address";
  }

  return error;
}

function validateUsername(value) {
  let error;
  if (!value) error = "Required";
  return error;
}

function validatePassword(value) {
  let error;
  if (!value) error = "Required";
  return error;
}

const Registration = () => {
  const onSubmit = (values, { resetForm }) => {
    axios
      .post(`${environment.apiUrl}${environment.prefix}user/register`, values)
      .then((res) => {
        resetForm({});
        window.location.assign("login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="">SIGN UP</div>
          <Field name="email" validate={validateEmail} placeholder="Email" />
          <div className="error">
            {errors.email && touched.email && errors.email}
          </div>

          <Field
            name="username"
            validate={validateUsername}
            placeholder="Name"
          />
          <div className="error">
            {errors.username && touched.username && errors.username}
          </div>

          <Field
            name="password"
            validate={validatePassword}
            placeholder="Password"
          />
          <div className="error">
            {errors.password && touched.password && errors.password}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Registration;
