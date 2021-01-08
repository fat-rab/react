import React from "react";
import { Link } from "react-router-dom";
//Link 切换页面的时候不会刷新页面，避免调用过多的接口
const query = {
  pathname: "/",
  query: "query参数",
  state: "state参数",
};
const NavBar = () => {
  return (
    <ul>
      <li>
        {/* query和state可以传对象，但是query刷新丢失参数 */}
        <Link to={query}>Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
