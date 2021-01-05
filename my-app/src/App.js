import "./App.css";
import React, { Component } from "react";
import ListItem from "./components/listItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {
          id: 1,
          name: "小米屌丝机",
          price: 99,
          stock: 20,
          value: 4,
        },
        {
          id: 2,
          name: "华为爱国机",
          price: 4000,
          stock: 20,
          value: 2,
        },
        {
          id: 3,
          name: "苹果高贵机",
          price: 8000,
          stock: 20,
          value: 1,
        },
      ],
    };
  }
  renderList() {
    // if (listData.length === 0) {
    //   return <div className="text-content">购物车是空的</div>;
    // }
    return this.state.listData.map((item) => {
      return (
        <ListItem
          key={item.id}
          data={item}
          onDelete={this.handleDetele}
        ></ListItem>
      );
    });
  }
  handleDetele = (id) => {
    const listData = this.state.listData.filter((item) => item.id !== id);
    this.setState({
      listData,
    });
  };
  handleReset = () => {};
  render() {
    return (
      <div className="container">
        <button
          onClick={this.handleReset}
          type="button"
          className="btn btn-primary"
        >
          重置
        </button>
        {this.state.listData.length === 0 && (
          <div className="text-content">购物车是空的</div>
        )}
        {this.renderList()}
      </div>
    );
  }
}

export default App;
