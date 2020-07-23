import React from "react";
import { popUp, createcard } from "../../../store/main/actions";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import "./createNote.scss";
import { Formik } from "formik";

const createNote = (props) => {
  const handleSubmit = (value) => {
    value.date = new Date().toLocaleDateString();
    props.card(value);
  };

  return (
    <div className="createNote">
      <Formik
        validate={(value) => {
          let errors = {};
          if (!value.title) {
            errors.title = "Fill in the title";
          }
          if (!value.content) {
            errors.content = "Fill in the main text";
          }
          return errors;
        }}
        initialValues={{
          title: "",
          content: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit, handleChange, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div className="close" onClick={props.visible}>
              X
            </div>
            <h1>Создать заметку</h1>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Заголовок</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Введите заголовок.."
                onChange={handleChange}
              />
            </Form.Group>
            {errors.title && touched.title ? (
              <div className="error">{errors.title}</div>
            ) : null}

            <Form.Group controlId="formBasicContent">
              <Form.Label>Основной текст</Form.Label>
              <Form.Control
                name="content"
                type="text"
                placeholder="Введите текст.."
                onChange={handleChange}
              />
            </Form.Group>
            {errors.content && touched.content ? (
              <div className="error">{errors.content}</div>
            ) : null}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    card: (card) => dispatch(createcard(card)),
    visible: () => dispatch(popUp(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(createNote);
