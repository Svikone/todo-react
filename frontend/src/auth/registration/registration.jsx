import React from "react";
import { Formik, Form, Field } from "formik";
import httpServices from "../../services/http.service";
import { connect, Provider, useDispatch } from "react-redux";
import { loginError } from "../../store/auth/login/actions";
import Error from "../../shared/error";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validateName(value) {
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
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="">SIGN UP</div>
            <Field name="email" validate={validateEmail} placeholder="Email" />
            <div className="error">
              {errors.email && touched.email && errors.email}
            </div>

            <Field name="name" validate={validateName} placeholder="Name" />
            <div className="error">
              {errors.name && touched.name && errors.name}
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
      <Error />
    </div>
  );
};

export default Registration;
