var React = require("react");
import { browserHistory } from "react-router";
import { connect } from "react-redux";

import Login from "../components/Login";
import { userLogin, verifyUserID } from "../actions/action";

var LoginContainer = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
      remember_me: true
    };
  },

  handleUserNameChange: function(event) {
    this.setState({username: event.target.value});
  },

  handlePasswordChange: function(event) {
    this.setState({password: event.target.value});
  },

  handleRememberMe: function(event) {
    this.setState({remember_me: event.target.checked});
  },

  userLogin: function(event) {
    event.preventDefault();
    this.props.userLogin(JSON.stringify(this.state));
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.currentUser.user) {
      browserHistory.push("/blog");
    }
  },

  componentWillUnmount: function() {
    // TODO: should reset this.props.currentUser, otherwise login tip info still there
    console.log("reset currentUser");
  },

  render: function() {
    return (
      <Login
        currentUser={this.props.currentUser}
        handleUserNameChange={this.handleUserNameChange}
        handlePasswordChange={this.handlePasswordChange}
        handleRememberMe={this.handleRememberMe}
        currentUser={this.props.currentUser}
        userLogin={this.userLogin} />
    );
  }
});

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: function(props) {
      return dispatch(userLogin(props));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
