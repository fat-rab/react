/**
 * 高阶组件hoc:用于逻辑复用
   本质是利用一个接受react组件作为参数的函数，返回一个新的react组件
   对已有组件进行封装，形成新的有自己的状态和逻辑的组件
   const newComponent=hoc(oldComponent)
 */

import React from "react";

const withToolTip = (Component) => {
  class HOC extends React.Component {
    state = {
      showToolTip: false,
      context: "",
    };
    onMouseOver = (e) => {
      this.setState({
        showToolTip: true,
        context: e.target.innerText,
      });
    };
    onMouseOut = () => {
      this.setState({
        showToolTip: false,
        context: "",
      });
    };
    render() {
      //...this.props 接受父组件传递的参数
      return (
        <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
          <Component action={this.state} {...this.props}></Component>
        </div>
      );
    }
  }
  return HOC;
};

export default withToolTip;
