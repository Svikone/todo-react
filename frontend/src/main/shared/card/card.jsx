import React from "react";
import { connect } from "react-redux";
import { allCardsUser, removeCard } from "../../../store/main/actions";
import httpServices from "../../../services/http.service";
import { Button } from "react-bootstrap";
import "./card.scss";

const Card = (props) => {
  function removeCard(id) {
    props.removeCard(id);
  }

  return (
    <div className="">
      <div className="wrapper">
        <div className="title">{props.item.title}</div>
        <div className="content">{props.item.content}</div>
        <div className="container">
          <div className="date">{props.item.date}</div>
          <Button
            variant="danger"
            className="remove-btn"
            onClick={() => removeCard(props.item._id)}
          >
            remove
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    allCardsUser: () => dispatch(allCardsUser()),
    removeCard: (id) => dispatch(removeCard(id)),
  };
};
export default connect(null, mapDispatchToProps)(Card);
