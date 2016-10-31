var React = require("react");
import { connect } from "react-redux";

import Signup from "../components/Signup";

var SignupContainer = React.createClass({
  render: function() {
    return (
      <Signup />
    );
  }
});

export default connect()(SignupContainer);
