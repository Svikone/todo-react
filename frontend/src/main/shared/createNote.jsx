import React from "react";
import { popUp } from "../../store/main/actions";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import "./createNote.scss";
import { Formik, Field } from "formik";
import httpServices from "../../services/http.service";

const createNote = (props) => {
  const handleSubmit = (value) => {
    const date = new Date().toLocaleDateString();
    value.date = date;
    httpServices
      .post("card/create", value)
      .then((response) => {
        props.visible();
      })
      .catch((error) => {});
  };

  return (
    <div className="createNote">
      <Formik
        validate={(value) => {
          let errors = {};
          if (!value.title || !value.content)
            errors.name = "Fill in all the fields";

          return errors;
        }}
        initialValues={{
          title: "",
          content: "",
        }}
        onSubmit={handleSubmit}
        render={({ errors, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Заголовок</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Введите заголовок.."
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicContent">
              <Form.Label>Основной текст</Form.Label>
              <Form.Control
                name="content"
                type="text"
                placeholder="Введите текст.."
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {errors.name ? <div className="error">{errors.name}</div> : null}
          </Form>
        )}
      ></Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    visible: () => dispatch(popUp(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(createNote);
