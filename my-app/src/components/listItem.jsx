import React, { Component } from "react";
import style from "./listItem.module.css";
import classNames from "classnames/bind";
import cn from "classnames";
const cls = classNames.bind(style);
let count = 0;
class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const _cn = cn({
      "themed-grid-col-s": !count,
    });
    return (
      <div className="row mb-3">
        <div className="col-6 themed-grid-col">
          <span className={cls("title", "list-font")}>
            {this.props.data.name}
          </span>
          {/* <span className={style.title}>{this.props.data.name}</span> */}
        </div>
        <div className="col-1 themed-grid-col">￥{this.props.data.price}</div>
        <div className={`col-2 themed-grid-col ${_cn}`}>{count}</div>
        {/* <div className={`col-2 themed-grid-col${count ? "" : "-s"}`}>
          {count}
        </div> */}
      </div>
    );
  }
}

export default ListItem;
