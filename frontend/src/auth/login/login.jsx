import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import environment from "../../environment/environment";
import { createStore } from "redux";
import { connect } from "react-redux";

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
const initialState = {
  token: "",
};
const rootReducer = (state = initialState, action) => {};

const store = createStore(rootReducer);
console.log(store.getState());
const Login = () => {
  const onSubmit = (values, { resetForm }) => {
    axios
      .post(`${environment.apiUrl}${environment.prefix}user/login`, values)
      .then((res) => {
        resetForm({});
        //   window.location.assign("login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="">SIGN IN</div>

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

export default Login;
