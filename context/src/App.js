import "./App.css";
import React, { Component } from "react";
import CustomContext from "./components/customContext";
import CustomButton from "./components/customButton";
import FunButton from "./components/funButtion"
//context新api
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#28a745",
    };
  }
  render() {
    const { color } = this.state;
    return (
      //value={color} 一定要使用变量，不能使用字符串，否则会重复渲染，影响性能，并且不方便后续更改
      <CustomContext.Provider value={color}>
        {/* 类组件 */}
        <CustomButton>New Context Api</CustomButton>
        {/* 函数组件 */}
        <FunButton>New Context Api2</FunButton>
      </CustomContext.Provider>
    );
  }
}
//context旧api
// class App extends Component {
//   static childContextTypes = {
//     color: PropTypes.string,
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: "#28a745",
//     };
//   }
//   getChildContext() {
//     const { color } = this.state;
//     return {
//       color,
//     };
//   }
//   render() {
//     return <CustomButton>自定义按钮</CustomButton>;
//   }
// }

export default App;
