import React from "react";
import { connect } from "react-redux";
import {
  REGISTRATION,
  registrationError,
} from "../store/auth/registration/actions";
import { LOGIN, loginError } from "../store/auth/login/actions";

class error extends React.Component {
  componentDidMount() {
    if (this.props.error) {
      switch (this.props.component) {
        case REGISTRATION:
          setTimeout(() => this.props.registrationError(), 3000);
        case LOGIN:
          setTimeout(() => this.props.loginError(), 3000);
      }
    }
  }

  render() {
    return (
      <div className="">
        <div className="server_error">{this.props.error}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registrationError: () => dispatch(registrationError(null, false)),
    loginError: () => dispatch(loginError(null, false)),
  };
};
export default connect(null, mapDispatchToProps)(error);
