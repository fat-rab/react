import produce from "immer";
import * as types from "../../actions/mutation-types";

const initialState = {
  complexData: {
    commonInfo: {
      name: {
        firstName: "云课堂",
        secondName: "Fedora",
      },
    },
    specialInfo: {
      address: "网商路599号",
    },
  },
};

const mutations = {
  [types.UPDATE_IMMUTABLE_DATA](state, action) {
    //如果直接修改深层级的对象属性，不会触发更新
    //如果使用结构属于浅拷贝，此时深层次的原对象会跟着现对象进行修改
    // const { complexData } = state;
    // const newComplexData = { ...complexData };
    // newComplexData.commonInfo.name.firstName = action.payload;
    // console.log('newComplexData Vs complexData', newComplexData, complexData);
    // return {
    //   ...state,
    //   complexData: newComplexData,
    // };
    return produce(state, (draftState) => {
      draftState.complexData.commonInfo.name.firstName = action.payload;
      console.log("oldState", state);
    });
  },
};

export default function (state = initialState, action) {
  if (!mutations[action.type]) return state;
  return mutations[action.type](state, action);
}
