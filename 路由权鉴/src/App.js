import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { routes } from "./router/router";
import renderRoutes from "./router/renderRouter";
function App() {
  return <div className="App">{renderRoutes(routes)}</div>;
}

export default App;
