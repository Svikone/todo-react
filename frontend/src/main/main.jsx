import React from "react";
import { connect } from "react-redux";
import { popUp, allCardsUser } from "../store/main/actions";
import CreateNote from "./shared/createNote/createNote";
import { Button } from "react-bootstrap";
import Card from "./shared/card/card";
import history from "../history";

class Main extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/auth/login");
    } else {
      this.props.allCardsUser();
    }
  }

  render() {
    return (
      <div className="">
        {!this.props.statePopUp ? (
          <Button
            variant="success"
            className="card-btn"
            onClick={this.props.visible}
          >
            Create note
          </Button>
        ) : (
          <div className="">{this.props.statePopUp && <CreateNote />}</div>
        )}
        <div className="all-card">
          <h2>Ваши заметки</h2>

          {this.props.cards.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cards: state.main.cards,
    statePopUp: state.main.visibility,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allCardsUser: () => dispatch(allCardsUser()),
    visible: () => dispatch(popUp(true)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
