import React, { Component } from "react";
import { updateName } from "../../actions/home";
import { connect } from "react-redux";
// @connect(
//   (state) => state.homeReducer,
//   (dispatch) => ({
//     updateName: (params) => dispatch(updateName(params)),
//   })
// )
class Home extends Component {
  render() {
    return <div>redux</div>;
  }
}

export default Home;
