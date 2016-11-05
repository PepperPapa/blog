var React = require("react");
import { connect } from "react-redux";

import Header from "../components/Header";
import { verifyUserID } from "../actions/action";

var HeaderContainer = React.createClass({
  logout: function() {
    // must content 'Path=/'
    document.cookie = "user_id=; Path=/; Expires=Thu, 26 Feb 2000 11:50:25 GMT;";
  },

  render: function() {
    return (
      <Header
        currentUser={this.props.currentUser}
        logout={this.logout} />
    );
  }
});

function mapStateToProps(state) {
  return {
    currentUser: state.verifyUserID
  };
}

function mapDispatchToProps(dispatch) {
  return {
    verifyUserID: function() {
      return dispatch(verifyUserID());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
