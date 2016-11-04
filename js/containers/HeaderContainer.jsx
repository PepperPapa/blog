var React = require("react");
import { connect } from "react-redux";

import Header from "../components/Header";
import { verifyUserID } from "../actions/action";

var HeaderContainer = React.createClass({
  getInitialState: function() {
    var pattern = /user_id=(\d+)/;
    const cookie = document.cookie;
    var match = pattern.exec(cookie);
    return {
      user_id: match[1]
    }
  },

  verifyUserID: function() {
    // if cookie has user_id
    if (this.state.user_id) {
      this.props.verifyUserID(verifyUserID(JSON.stringify(this.state)));
    }
  },

  render: function() {
    return (
      <Header />
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
    verifyUserID: function(props) {
      return dispatch(verifyUserID(props));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
