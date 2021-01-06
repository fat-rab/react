import "./App.css";
import React, { Component } from "react";
import ListPage from "./components/listPage";
import Navbar from "./components/navBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {
          id: 1,
          name: "小米屌丝机",
          price: 9.9,
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
  handleDecrease = (id) => {
    const _listData = this.state.listData.map((item) => {
      if (item.id === id) {
        const _item = { ...item };
        _item.value--;
        if (item.value < 0) _item.value = 0;
        return _item;
      } else {
        return item;
      }
    });
    this.setState({
      listData: _listData,
    });
  };
  handleIncrease = (id) => {
    const _listData = this.state.listData.map((item) => {
      if (item.id === id) {
        const _item = { ...item };
        _item.value++;
        return _item;
      } else {
        return item;
      }
    });
    this.setState({
      listData: _listData,
    });
  };

  handleDetele = (id) => {
    const listData = this.state.listData.filter((item) => item.id !== id);
    this.setState({
      listData,
    });
  };
  handleReset = () => {
    const listData = this.state.listData.map((item) => {
      const _item = { ...item };
      _item.value = 0;
      return _item;
    });
    this.setState({
      listData,
    });
  };
  render() {
    return (
      //React.Fragments
      <>
        <Navbar
          length={this.state.listData.length}
          handleReset={this.handleReset}
        ></Navbar>
        <ListPage
          listData={this.state.listData}
          handleDetele={this.handleDetele}
          handleDecrease={this.handleDecrease}
          handleIncrease={this.handleIncrease}
        ></ListPage>
      </>
    );
  }
}

export default App;
