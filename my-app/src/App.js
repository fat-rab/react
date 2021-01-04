import "./App.css";
import React, { Component } from "react";
import ListItem from "./components/listItem";

const listData = [
  {
    id: 1,
    name: "小米屌丝机",
    price: 99,
    stock: 20,
  },
  {
    id: 2,
    name: "华为爱国机",
    price: 4000,
    stock: 20,
  },
  {
    id: 3,
    name: "苹果高贵机",
    price: 8000,
    stock: 20,
  },
];
class App extends Component {
  state = {};
  renderList() {
    // if (listData.length === 0) {
    //   return <div className="text-content">购物车是空的</div>;
    // }
    return listData.map((item) => {
      return <ListItem key={item.id} data={item}></ListItem>;
    });
  }
  render() {
    return (
      <div className="container">
        {listData.length === 0 && (
          <div className="text-content">购物车是空的</div>
        )}
        {this.renderList()}
      </div>
    );
  }
}

export default App;
