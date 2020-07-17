import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import environment from "../../environment/environment";
import { setLoginData } from "../../store/auth/login/actions";
import { useSelector } from "react-redux";
import { connect, Provider, useDispatch } from "react-redux";

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

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(setLoginData(values));
    resetForm({});
    // axios
    //   .post(`${environment.apiUrl}${environment.prefix}user/login`, values)
    //   .then((res) => {
    //     const token = res.data.token;
    //     resetForm({});
    //     localStorage.setItem("token", token);
    //     dispatch(setToken());
    //     //   window.location.assign("login");
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="">SIGN IN</div>

          <Field name="name" validate={validateName} placeholder="Name" />
          <div className="error">
            {errors.name && touched.name && errors.name}
          </div>

          <Field
            name="password"
            type="password"
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
