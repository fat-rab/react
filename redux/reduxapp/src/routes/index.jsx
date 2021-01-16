import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../containers/home";
const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
    </BrowserRouter>
  );
};

export default Routes;
