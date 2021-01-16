import React, { Component } from "react";
import { updateName, asynUpdateName } from "../../actions/home";
import { connect } from "react-redux";
@connect(
  (state) => state.homeReducer,
  (dispatch) => ({
    updateName: (params) => dispatch(updateName(params)),
    asynUpdateName: (params) => dispatch(asynUpdateName(params)),
  })
)
class Home extends Component {
  handleClick = () => {
    const { updateName, asynUpdateName } = this.props;
    //updateName("同步云课堂");
    asynUpdateName("异步云课堂");
  };
  render() {
    const { homeName } = this.props;
    return (
      <div>
        <div>{homeName}</div>
        <button type="button" onClick={this.handleClick}>
          更改
        </button>
      </div>
    );
  }
}

export default Home;
