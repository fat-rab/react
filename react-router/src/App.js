import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  //在Home上添加excat 或者使用Switch包裹
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          {/* 这个要写在/products上面，匹配又具象到抽象 */}
          <Route path="/products/:id" component={ProductDetails}></Route>
          <Redirect from="/mall" to="/products"></Redirect>
          <Route
            path="/products"
            render={(props) => <Products id="xx" {...props}></Products>}
          ></Route>
          <Route path="/posts/:year?/:month?" component={Posts}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/not-fount" component={NotFound}></Route>
          <Route path="/" exact component={Home}></Route>
          <Redirect to="/not-fount"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default App;
