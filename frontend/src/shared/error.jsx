import React from "react";
import { connect } from "react-redux";

class error extends React.Component {
  render() {
    return (
      <div className="">
        <div className="">{this.props.error.login.errorMessage}</div>
      </div>
    );
  }
}

export default connect((state) => ({
  error: state,
}))(error);
