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
