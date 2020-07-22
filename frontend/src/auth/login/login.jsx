import React from "react";
import { Formik, Form, Field } from "formik";
import { setLoginData } from "../../store/auth/login/actions";
import { useDispatch } from "react-redux";
import Error from "../../shared/error";
import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";

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
  };

  return (
    <div className="">
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

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>

      <Error />
    </div>
  );
};

export default Login;
