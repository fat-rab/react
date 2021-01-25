import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

@connect((state) => state.reduxActionsReducer)
export default class ReduxActionsDemo extends Component {
  render() {
    const { actionName } = this.props;
    return (
      <div>
        {actionName}
      </div>
    );
  }
}

ReduxActionsDemo.propTypes = {
  actionName: propTypes.string,
};

ReduxActionsDemo.defaultProps = {
  actionName: '',
};
