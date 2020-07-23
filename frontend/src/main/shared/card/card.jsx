import React from "react";
import { connect } from "react-redux";
import { allCardsUser } from "../../../store/main/actions";
import httpServices from "../../../services/http.service";
import { Button } from "react-bootstrap";
import "./card.scss";

const Card = (props) => {
  async function removeCard(id) {
    try {
      const response = await httpServices.delete(`card/by/${id}`);
      props.allCardsUser();
    } catch (e) {}
  }

  console.log(props.item);
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    allCardsUser: () => dispatch(allCardsUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
