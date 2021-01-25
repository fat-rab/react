import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import updateImmutableData from '@/actions/immutable';

@connect(
  (state) => {
    console.log(state.immutableReducer);
    return ({
      complexData: state.immutableReducer.complexData,
    });
  },
  (dispatch) => ({
    updateImmutableData: (params) => dispatch(updateImmutableData(params)),
  }),
)
export default class ImmutableDemo extends Component {
  handleClick = () => {
    const { updateImmutableData } = this.props;
    updateImmutableData('immutable 云课堂');
  }

  render() {
    const { complexData } = this.props;
    return (
      <div>
        <div>
          {complexData?.commonInfo?.name?.firstName}
        </div>
        <button type="button" onClick={this.handleClick}>更改</button>
      </div>
    );
  }
}

ImmutableDemo.propTypes = {
  complexData: propTypes.objectOf(propTypes.object),
  updateImmutableData: propTypes.func,
};

ImmutableDemo.defaultProps = {
  complexData: {},
  updateImmutableData: () => null,
};
