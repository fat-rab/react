//impc
import React, { PureComponent } from "react";
//imrc
// import React, { Component } from 'react';
import ListItem from "./listItem"
class ListPage extends PureComponent {
  renderList() {
    // if (listData.length === 0) {
    //   return <div className="text-content">购物车是空的</div>;
    // }
    return this.props.listData.map((item) => {
      return (
        <ListItem
          key={item.id}
          data={item}
          handleDetele={this.props.handleDetele}
          handleDecrease={this.props.handleDecrease}
          handleIncrease={this.props.handleIncrease}
        ></ListItem>
      );
    });
  }
  render() {
    return (
      <div className="container">
        {this.props.listData.length === 0 && (
          <div className="text-content">购物车是空的</div>
        )}
        {this.renderList()}
      </div>
    );
  }
}

export default ListPage;
