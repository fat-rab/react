import React, { PureComponent } from "react";
import style from "./listItem.module.css";
import classNames from "classnames/bind";
//import cn from "classnames";
const cls = classNames.bind(style);
//let count = 0;
class ListItem extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: this.props.data.value,
  //   };
  //   /**
  //    * 状态的类型是数组
  //    * let _arr=[...this.state.arr,'1']
  //    * this.setState({arr:_arr})
  //    * 状态类型是对象
  //    * const _obj=Object.assign({},this.state.obj,{a:1})
  //    * const _obj={...this.state.obj,a:1}
  //    * this.setState({obj:_obj})
  //    */
  // }
  // checkCount() {
  //   if (count < 0) count = 0;
  // }
  /**
   * 传参方法
   * onClick={this.handleDecrease.bind(this, this.props.data.id)}
   * onClick={(e) => {this.handleDecrease(e,this.props.data.id)}} //如果需要使用事件对象，箭头函数方法需要手动传入
   */
 
  //避免在没有改变数据的情况下，修改虚拟DOM,建议使用PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props, nextProps, this.state, nextState);
  //   if (this.props.data.value === nextState.count) return false;
  //   if (this.props.data.id === nextProps.data.id) return false;
  //   return true;
  // }
  render() {
    // const _cn = cn({
    //   "themed-grid-col-s": !count,
    // });
    console.log("render");
    return (
      <div className="row mb-3">
        <div className="col-6 themed-grid-col">
          <span className={cls("title")}>{this.props.data.name}</span>
        </div>
        <div className="col-1 themed-grid-col">￥{this.props.data.price}</div>
        <div
          className={`col-2 themed-grid-col${
            this.props.data.value ? "" : "-s"
          }`}
        >
          <button
            onClick={() => {
              this.props.handleDecrease(this.props.data.id);
            }}
            type="button"
            className="btn btn-primary"
          >
            -
          </button>
          <span className={cls("digital")}>{this.props.data.value}</span>
          <button
            onClick={() => {
              this.props.handleIncrease(this.props.data.id);
            }}
            type="button"
            className="btn btn-primary"
          >
            +
          </button>
        </div>
        <div className="col-1 themed-grid-col">
          ￥{this.props.data.price * this.props.data.value}
        </div>
        <div className="col-1 themed-grid-col">
          <button
            onClick={() => {
              this.props.handleDetele(this.props.data.id);
            }}
            type="button"
            className="btn btn-danger btn-sm"
          >
            删除
          </button>
        </div>
      </div>
      // <div className="row mb-3">
      //   <div className="col-6 themed-grid-col">
      //     <span className={cls("title", "list-font")}>
      //       {this.props.data.name}
      //     </span>
      //     {/* <span className={style.title}>{this.props.data.name}</span> */}
      //   </div>
      //   <div className="col-1 themed-grid-col">￥{this.props.data.price}</div>
      //   <div className={`col-2 themed-grid-col ${_cn}`}>{count}</div>
      //   {/* <div className={`col-2 themed-grid-col${count ? "" : "-s"}`}>
      //     {count}
      //   </div> */}
      // </div>
    );
  }
}

export default ListItem;
