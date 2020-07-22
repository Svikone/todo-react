import React from "react";
import "./main.scss";
import { connect } from "react-redux";
import { popUp } from "../store/main/actions";
import CreateNote from "./shared/createNote";
import { Button } from "react-bootstrap";
import httpServices from "../services/http.service";

class main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    console.log();
    httpServices
      .get("card/by/name")
      .then((response) => {
        this.state.cards = response.data;
        console.log(this.state.cards);
      })
      .catch((error) => {});
  }

  render() {
    const statePopUp = this.props.state.main.visibility;
    let cards = this.state.cards.map((item) => (
      <div className="">{item.content}</div>
    ));
    console.log(this.state.cards);

    return (
      <div className="">
        {!statePopUp ? (
          <Button
            variant="success"
            className="card-btn"
            onClick={this.props.visible}
          >
            Create note
          </Button>
        ) : (
          <h1>Создать заметку</h1>
        )}
        {statePopUp && <CreateNote />}
        <div className="all-card">
          <h2>Ваши заметки</h2>
          <div className="">{cards}</div>
          <div className="wrapper">
            {/* <div className="title">{item.titlee}</div> */}
            <div className="content">
              спросить то что я в регистрации заюзал логин еррор а в сторе она
              находиться именно в логине
            </div>
            <div className="container">
              <div className="date">22.32.13</div>
              <Button variant="danger" className="remove-btn">
                remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    visible: () => dispatch(popUp(true)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(main);
