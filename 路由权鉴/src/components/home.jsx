import React, { Component } from "react";
import { Button } from "antd";
const auth = window.user.data;

class Home extends Component {
  handleLogin = () => {
    if (auth === 1) {
      window.location.href = "/login";
    } else {
      window.location.href = "/backend";
    }
  };
  render() {
    return (
      <div className="home">
        <Button
          className="enter-btn"
          type="primary"
          size="large"
          onClick={this.handleLogin}
        >
          点击进入
        </Button>
      </div>
    );
  }
}

export default Home;
