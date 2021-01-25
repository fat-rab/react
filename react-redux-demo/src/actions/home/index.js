import * as types from '../mutation-types';

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

export function queryAsyncName(params) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: types.QUERY_GLOBAL_NAME,
        payload: params,
      });
    }, 2000);
  };
}

export function asynUpdatecName(params) {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(updateName(params));
    }, 3000);
  };
}
