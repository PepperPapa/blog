var React = require("react");
import { connect } from "react-redux";

import Header from "../components/Header";
import { verifyUserID } from "../actions/action";
import store from "../store/store";

var HeaderContainer = React.createClass({
  // getInitialState: function() {
  //   return {
  //     currentUser: this.props.currentUser
  //   };
  // },
  //
  // componentDidMount: function() {
  //   var self = this;
  //   store.subscribe(function() {
  //     console.log(store.getState());
  //     self.setState({
  //       currentUser: store.getState().verifyUserID
  //     });
  //   });
  // },

  render: function() {
    return (
      <Header
        currentUser={this.props.currentUser}/>
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
