import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { filterData, updateFilterStatus } from "../../actions/reselect";

const filterStatusMap = {
  1: "FILTER_ALL_DATA",
  2: "FILTER_SUCCESS_STATUS",
  3: "FILTER_FAIL_STATUS",
};
const getReselectList = (state) => state.reSelectReducer.reSelectList;
const getFilterStatus = (state) => state.reSelectReducer.filterStatus;

// eslint-disable-next-line no-unused-vars
const filterReselectData = createSelector(
  [getReselectList, getFilterStatus],
  (list, filter) => filterData(list, filter)
);

// filterData(
//   state.reSelectReducer.reSelectList,
//   state.reSelectReducer.filterStatus
// );

@connect(
  (state) => ({
    //使用reselect可以优化这一过程
    filterList: filterReselectData(state),
    //即使点击相同的菜单，因为mapStateToProps中的state带有筛选元素，会导致每次都返回一个新的对象，会导致再次进行一次action的行为
    // filterList: filterData(
    //   state.reSelectReducer.reSelectList,
    //   state.reSelectReducer.filterStatus
    // ),
  }),
  (dispatch) => ({
    updateFilterStatus: (params) => dispatch(updateFilterStatus(params)),
  })
)
class ReselectDemo extends Component {
  handleUpdate = (signal) => {
    const { updateFilterStatus } = this.props;
    updateFilterStatus(filterStatusMap[signal]);
    // console.log(signal, this.props, updateFilterStatus);
  };

  render() {
    const { filterList } = this.props;

    return (
      <div>
        <>
          {filterList.map((item) => (
            <div key={item.key}>
              <span>{item.name}</span>
              &nbsp;&nbsp;
              <span>{String(item.status)}</span>
            </div>
          ))}
        </>
        <button type="button" onClick={() => this.handleUpdate(1)}>
          全部
        </button>
        <button type="button" onClick={() => this.handleUpdate(2)}>
          成功
        </button>
        <button type="button" onClick={() => this.handleUpdate(3)}>
          失败
        </button>
      </div>
    );
  }
}
export default ReselectDemo;
ReselectDemo.propTypes = {
  filterList: propTypes.arrayOf(propTypes.object),
  updateFilterStatus: propTypes.func,
};

ReselectDemo.defaultProps = {
  filterList: [],
  updateFilterStatus: () => null,
};
