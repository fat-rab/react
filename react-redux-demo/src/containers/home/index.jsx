/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  updateName,
  queryAsyncName,
  asynUpdatecName,
} from '@/actions/home';

import { connect } from 'react-redux';

@connect(
  (state) => state.homeReducer,
  (dispatch) => ({
    updateName: (params) => dispatch(updateName(params)),
    queryAsyncName: (params) => dispatch(queryAsyncName(params)),
    asynUpdatecName: (params) => dispatch(asynUpdatecName(params)),
  }),
)
export default class Home extends Component {
  handleClick = () => {
    const {
      // updateName,
      // queryAsyncName,
      asynUpdatecName,
    } = this.props;
    // console.log(updateName);
    asynUpdatecName('异步云课堂');
  }

  render() {
    const { homeName } = this.props;
    return (
      <div>
        <div>
          {homeName}
        </div>
        <button
          type="button"
          onClick={this.handleClick}
        >
          更改
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  homeName: PropTypes.string,
  updateName: PropTypes.func,
  queryAsyncName: PropTypes.func,
  asynUpdatecName: PropTypes.func,
};

Home.defaultProps = {
  homeName: '',
  updateName: () => ({}),
  queryAsyncName: () => ({}),
  asynUpdatecName: () => ({}),
};
