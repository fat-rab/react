import * as types from "../mutation-types";

export function queryName(params) {
  return {
    type: types.QUERY_GLOBAL_NAME,
    payload: params,
  };
}
export function updateName(params) {
  return {
    type: types.UPDATE_GLOBAL_NAME,
    payload: params,
  };
}

export function asynQueryName(params) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(queryName(params));
    }, 2000);
  };
}

export function asynUpdateName(params) {
  return (dispatch, getState) => {
    console.log(getState());
    setTimeout(() => {
      dispatch(updateName(params));
    }, 2000);
  };
}
