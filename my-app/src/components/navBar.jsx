import React from "react";
//sfc
//无状态组件
const Navbar = ({ length, handleReset }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="warp">
          <span className="title">NAVBAR</span>
          <span className="badge badge-pill badge-primary ml-2 mr-2">
            {length}
          </span>
          <button
            className="btn btn-outline-success my-2 my-sm-0 fr"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
