import React from "react";
import "./main.scss";
import axios from "axios";

class main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    console.log("test");
    console.log(this.state);
  }
  test = () => {
    this.state.visible = !this.state.visible;
  };
  render() {
    function name(params) {}

    return (
      <div className="">
        <div className="card-btn btn" onClick="test()">
          Create note
        </div>
        {this.state.visible && <div className="note-container">sdgffg</div>}
        <div className="all-card">
          <h2>Ваши заметки</h2>
          <div className="wrapper">
            <div className="title">sdvds</div>
            <div className="content">sdcvvvds </div>
            <div className="container">
              <div className="date">22.32.13</div>
              <div className="remove-btn btn">remove </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default main;
