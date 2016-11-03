var React = require("react");
import { browserHistory } from "react-router";
import { connect } from "react-redux";

import Signup from "../components/Signup";
import { createUser } from "../actions/action";

var SignupContainer = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
      verify: ""
    };
  },

  handleUserNameChange: function(event) {
    this.setState({username: event.target.value});
  },

  handlePasswordChange: function(event) {
    this.setState({password: event.target.value});
  },

  handleVerifyChange: function(event) {
    this.setState({verify: event.target.value});
  },

  registerNewUser: function() {
    this.props.createUser(JSON.stringify(this.state));
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.newUser.user) {
      browserHistory.push("/login");
    }
  },

  render: function() {
    return (
      <Signup
        newUser={this.props.newUser}
        handleUserNameChange={this.handleUserNameChange}
        handlePasswordChange={this.handlePasswordChange}
        handleVerifyChange={this.handleVerifyChange}
        registerNewUser={this.registerNewUser} />
    );
  }
});

function mapStateToProps(state) {
  return {
    newUser: state.newUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: function(props) {
      return dispatch(createUser(props));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
